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
public-blockchain> npm init -y
public-blockchain> npm install express body-parser
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
## POST request
```plaintext
http://localhost:3000/mineBlock
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
