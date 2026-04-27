const CryptoJS = require("crypto-js");


const generateRandomKey = (algorithm = 'AES') => {
    let length = 16; // default AES
    
    if (algorithm === 'DES') {
        length = 8;
    } else if (algorithm === 'TripleDES' || algorithm === '3DES') {
        length = 24;
    } else if (algorithm === 'AES') {
        length = 16;
    }
    
    const key = CryptoJS.lib.WordArray.random(length).toString();
    return key;
};

const encryptSymmetric = (text, key, algorithm) => {
    // Validate key size FIRST before any encryption
    const keyLength = key.length;
    
    if (algorithm === 'AES') {
        if (![16, 24, 32].includes(keyLength)) {
            throw new Error(`Invalid key size for AES! Must be 16, 24 or 32 characters. Got ${keyLength}.`);
        }
        return CryptoJS.AES.encrypt(text, key).toString();
    }
    
    if (algorithm === 'DES') {
        if (keyLength !== 8) {
            throw new Error(`Invalid key size for DES! Must be 8 characters. Got ${keyLength}.`);
        }
        return CryptoJS.DES.encrypt(text, key).toString();
    }
    
    if (algorithm === 'TripleDES') {
        if (keyLength !== 24) {
            throw new Error(`Invalid key size for TripleDES! Must be 24 characters. Got ${keyLength}.`);
        }
        return CryptoJS.TripleDES.encrypt(text, key).toString();
    }
    
    throw new Error("Unsupported algorithm");
};

const decryptSymmetric = (ciphertext, key, algorithm) => {
    // Validate key size FIRST before any decryption
    const keyLength = key.length;
    
    if (algorithm === 'AES') {
        if (![16, 24, 32].includes(keyLength)) {
            throw new Error(`Key size invalid for AES! Must be 16, 24 or 32 characters. Got ${keyLength}.`);
        }
    } else if (algorithm === 'DES') {
        if (keyLength !== 8) {
            throw new Error(`Key size invalid for DES! Must be 8 characters. Got ${keyLength}.`);
        }
    } else if (algorithm === 'TripleDES') {
        if (keyLength !== 24) {
            throw new Error(`Key size invalid for TripleDES! Must be 24 characters. Got ${keyLength}.`);
        }
    } else {
        throw new Error("Unsupported algorithm");
    }

    let bytes;
    if (algorithm === 'AES') bytes = CryptoJS.AES.decrypt(ciphertext, key);
    else if (algorithm === 'DES') bytes = CryptoJS.DES.decrypt(ciphertext, key);
    else if (algorithm === 'TripleDES') bytes = CryptoJS.TripleDES.decrypt(ciphertext, key);

    try {
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        if (!originalText) throw new Error();
        return originalText;
    } catch (e) {
        throw new Error("Decryption failed: Invalid key or corrupted data");
    }
};

const hashData = (text, algorithm) => {
    if (algorithm === 'MD5') return CryptoJS.MD5(text).toString();
    if (algorithm === 'SHA256') return CryptoJS.SHA256(text).toString();
    throw new Error("Thuật toán băm không hợp lệ");
};

module.exports = { generateRandomKey, encryptSymmetric, decryptSymmetric, hashData };