const CryptoJS = require("crypto-js");


const generateRandomKey = (length = 16) => {
    const size = parseInt(length);

    if (isNaN(size) || size <= 0) {
        throw new Error("Độ dài key không hợp lệ (phải là số nguyên dương)");
    }

    return CryptoJS.lib.WordArray.random(size).toString();
};

const encryptSymmetric = (text, key, algorithm) => {
    console.log('[DEBUG] encryptSymmetric called:', { text: text.substring(0, 10), keyLength: key.length, algorithm });
    
    // Validate key size
    const keyLength = key.length;
    
    if (algorithm === 'AES') {
        if (![16, 24, 32].includes(keyLength)) {
            throw new Error(`AES yêu cầu key có độ dài 16, 24 hoặc 32 ký tự (hiện tại: ${keyLength})`);
        }
        return CryptoJS.AES.encrypt(text, key).toString();
    }
    
    if (algorithm === 'DES') {
        if (keyLength !== 8) {
            throw new Error(`DES yêu cầu key có độ dài 8 ký tự (hiện tại: ${keyLength})`);
        }
        return CryptoJS.DES.encrypt(text, key).toString();
    }
    
    if (algorithm === 'TripleDES') {
        if (keyLength !== 24) {
            throw new Error(`TripleDES yêu cầu key có độ dài 24 ký tự (hiện tại: ${keyLength})`);
        }
        return CryptoJS.TripleDES.encrypt(text, key).toString();
    }
    
    throw new Error("Thuật toán mã hóa không hợp lệ hoặc không được hỗ trợ");
};

const decryptSymmetric = (ciphertext, key, algorithm) => {
    // Validate key size
    const keyLength = key.length;
    
    if (algorithm === 'AES') {
        if (![16, 24, 32].includes(keyLength)) {
            throw new Error(`AES yêu cầu key có độ dài 16, 24 hoặc 32 ký tự (hiện tại: ${keyLength})`);
        }
    } else if (algorithm === 'DES') {
        if (keyLength !== 8) {
            throw new Error(`DES yêu cầu key có độ dài 8 ký tự (hiện tại: ${keyLength})`);
        }
    } else if (algorithm === 'TripleDES') {
        if (keyLength !== 24) {
            throw new Error(`TripleDES yêu cầu key có độ dài 24 ký tự (hiện tại: ${keyLength})`);
        }
    } else {
        throw new Error("Thuật toán giải mã không hợp lệ");
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
        throw new Error("Giải mã thất bại: Sai khóa hoặc dữ liệu không hợp lệ");
    }
};

const hashData = (text, algorithm) => {
    if (algorithm === 'MD5') return CryptoJS.MD5(text).toString();
    if (algorithm === 'SHA256') return CryptoJS.SHA256(text).toString();
    throw new Error("Thuật toán băm không hợp lệ");
};

module.exports = { generateRandomKey, encryptSymmetric, decryptSymmetric, hashData };