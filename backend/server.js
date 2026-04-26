const express = require('express');
const cors = require('cors');

// Controllers
const cryptoController = require('./controllers/cryptoController');
const rsaController = require('./controllers/rsaController');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
    console.log(`[REQUEST] ${req.method} ${req.path}`, { body: req.body });
    next();
});

console.log('[SERVER] Controllers loaded:', { cryptoController, rsaController });

// ===== Crypto APIs =====
console.log('[SERVER] Registering /api/crypto/gen-key endpoint');
app.get('/api/crypto/gen-key', cryptoController.getKey);
console.log('[SERVER] Registering /api/crypto/encrypt endpoint');
app.post('/api/crypto/encrypt', cryptoController.handleEncrypt);
console.log('[SERVER] Registering /api/ crypto/decrypt endpoint');
app.post('/api/crypto/decrypt', cryptoController.handleDecrypt);
console.log('[SERVER] Registering /api/crypto/hash endpoint');
app.post('/api/crypto/hash', cryptoController.handleHash);

// ===== RSA APIs =====
app.post('/api/rsa/generate-keys', rsaController.generateKeyPair);
app.post('/api/rsa/encrypt', rsaController.encrypt);
app.post('/api/rsa/decrypt', rsaController.decrypt);

// ===== Test API =====
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend NodeJS đã kết nối thành công!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
