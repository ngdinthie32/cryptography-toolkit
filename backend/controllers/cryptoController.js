const cryptoService = require('../services/cryptoService');

exports.getKey = (req, res) => {
    try {
        const { length } = req.query;
        const key = cryptoService.generateRandomKey(length || 16);
        res.json({ success: true, key });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.handleEncrypt = (req, res) => {
    try {
        const { text, key, algorithm } = req.body;
        if (!text || !key || !algorithm) {
            return res.status(400).json({ success: false, message: "Missing required fields: text, key, algorithm" });
        }
        const result = cryptoService.encryptSymmetric(text, key, algorithm);
        res.json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.handleDecrypt = (req, res) => {
    try {
        const { ciphertext, key, algorithm } = req.body;
        if (!ciphertext || !key || !algorithm) {
            return res.status(400).json({ success: false, message: "Thiếu ciphertext, key hoặc algorithm" });
        }
        const result = cryptoService.decryptSymmetric(ciphertext, key, algorithm);
        res.json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.handleHash = (req, res) => {
    try {
        const { text, algorithm } = req.body;
        if (!text || !algorithm) {
            return res.status(400).json({ success: false, message: "Thiếu text hoặc algorithm" });
        }
        const result = cryptoService.hashData(text, algorithm);
        res.json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};