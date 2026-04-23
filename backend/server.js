const express = require('express');
const cors = require('cors');
const rsaController = require('./rsa.controller');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Test cơ bản
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend NodeJS đã kết nối thành công!" });
});

// RSA APIs
app.post('/api/rsa/generate-keys', rsaController.generateKeyPair);
app.post('/api/rsa/encrypt', rsaController.encrypt);
app.post('/api/rsa/decrypt', rsaController.decrypt);

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
