const express = require('express');
const cors = require('cors');
const cryptoController = require('./controllers/cryptoController');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/crypto/gen-key', cryptoController.getKey);
app.post('/api/crypto/encrypt', cryptoController.handleEncrypt);
app.post('/api/crypto/decrypt', cryptoController.handleDecrypt);
app.post('/api/crypto/hash', cryptoController.handleHash);

app.listen(5000, () => console.log("Backend Running on Port 5000"));