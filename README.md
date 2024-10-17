# public-blockchain

step 1 : make folder with name "public-blockchain"

step 2 : cd public-blockchain

step 3 : Run Following commands
## cmd
```cmd
npm init -y
npm install express body-parser
```

step 4 : download and install postman in pc.

step 5 : execute command "node server6.js"

step 6 : use following urls in postman for getting existing blocks, add/mine new block, delete block.

GET: http://localhost:3000/blockchain
POST: http://localhost:3000/mineBlock
Verify : http://localhost:3000/verify
Delete: http://localhost:3000/delete/{index}

while mining block go to body, select json, add new object and click send.
