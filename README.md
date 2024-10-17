# public-blockchain

## step 1 : make folder with name "public-blockchain"
```console
mkdir public-blockchain
```

## step 2 : Change Path 
```console
cd public-blockchain
``` 

## step 3 : Run Following commands in Terminal
## cmd
```console
npm init -y
npm install express body-parser
```

step 4 : download and install postman in pc.

step 5 : 
## execute following command
```console
node server6.js
```

step 6 : 

## use following urls in postman for getting existing blocks, add/mine new block, delete block.

## GET request
```plaintext
http://localhost:3000/blockchain
```
It is used to get the current blockchain.
## POST request
```plaintext
http://localhost:3000/mineBlock
```
It is used to make post request with data.
    1. select **post**method.
    2. Go to **Body**.
    3. Select **raw** with **JSON**
    4. Paste the JSON object in it like this:
    **sample JSON**
```javascript
    {
    "index": 1,
    "timestamp": "10/16/2024",
    "data": {
        "sender": "Alice",
        "receiver": "Bob",
        "amount": 10
    }
}
    ```
## Verify blockchain 
```plaintext
http://localhost:3000/verify
```
## Delete: 
```plaintext
http://localhost:3000/delete/{index}
```


while mining block go to body, select json, add new object and click send.
