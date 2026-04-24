const crypto = require('crypto');

// Tạo cặp khóa RSA
const generateKeyPair = (req, res) => {
    try {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
            }
        });
        res.json({ publicKey, privateKey });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi tạo khóa RSA' });
    }
};

// Mã hóa bằng public key
const encrypt = (req, res) => {
    try {
        const { publicKey, plaintext } = req.body;
        const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(plaintext, 'utf8'));
        res.json({ ciphertext: encrypted.toString('base64') });
    } catch (error) {
        res.status(400).json({ error: 'Lỗi khi mã hóa' });
    }
};

// Giải mã bằng private key
const decrypt = (req, res) => {
    try {
        const { privateKey, ciphertext } = req.body;
        const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(ciphertext, 'base64'));
        res.json({ plaintext: decrypted.toString('utf8') });
    } catch (error) {
        res.status(400).json({ error: 'Lỗi khi giải mã' });
    }
};

module.exports = {
    generateKeyPair,
    encrypt,
    decrypt
};