// Import the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const { Blockchain, Block } = require('./blockchain');  // Import Blockchain and Block classes

// Initialize the Express app
const app = express();
const PORT = 3000;

// Create a new instance of Blockchain
const myBlockchain = new Blockchain();

// Use middleware to parse JSON data
app.use(bodyParser.json());

// Define the /blockchain route (GET)
app.get('/blockchain', (req, res) => {
    console.log('GET request received at /blockchain'); // Log when this endpoint is hit
    console.log('Current Blockchain:', JSON.stringify(myBlockchain, null, 2)); // Log the current state of the blockchain
    res.json(myBlockchain);
});

// Define the /mineBlock route (POST)
app.post('/mineBlock', (req, res) => {
    const data = req.body.data;  // Extract data from the request

    // Create a new Block using the Block class
    const newBlock = new Block(
        myBlockchain.chain.length,     // index
        new Date().toISOString(),      // timestamp
        data,                          // transaction data
        myBlockchain.getLatestBlock().hash  // previousHash
    );

    // Add the new block to the blockchain
    myBlockchain.addBlock(newBlock);

    // Log the new block and the entire blockchain in the terminal
    console.log('New Block Added:', JSON.stringify(newBlock, null, 2));
    console.log('Blockchain after mining new block:', JSON.stringify(myBlockchain, null, 2)); // Log the updated blockchain

    // Send response back to Postman
    res.json({ message: 'Block added successfully', blockchain: myBlockchain });
});

// Define the /verify route (GET) to verify the blockchain
app.get('/verify', (req, res) => {
    console.log('GET request received at /verify'); // Log when this endpoint is hit

    const isValid = myBlockchain.isChainValid(); // Check if the blockchain is valid

    if (isValid) {
        res.json({ message: 'Blockchain is valid' });
    } else {
        res.status(400).json({ message: 'Blockchain is not valid' });
    }
});

// Define the /delete route (DELETE) to delete a block by index
app.delete('/delete/:index', (req, res) => {
    const index = parseInt(req.params.index); // Get the index from the request parameters

    // Check if the index is valid
    if (index < 0 || index >= myBlockchain.chain.length) {
        return res.status(400).json({ message: 'Invalid block index' });
    }

    // Remove the block from the blockchain
    const removedBlock = myBlockchain.chain.splice(index, 1)[0]; // Remove block by index

    // Log the removed block and the updated blockchain in the terminal
    console.log('Block Deleted:', JSON.stringify(removedBlock, null, 2));
    console.log('Updated Blockchain after deletion:', JSON.stringify(myBlockchain, null, 2));

    // Send response back to Postman
    res.json({ message: 'Block deleted successfully', removedBlock, blockchain: myBlockchain });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Blockchain server is running on port ${PORT}`);
});
