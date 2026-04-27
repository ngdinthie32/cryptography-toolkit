import React, { useState } from 'react';
import axios from 'axios';
import ResultBox from './ResultBox';

function AsymmetricForm() {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  // 1. API Tạo cặp khóa
  const generateKeys = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/rsa/generate-keys');
      setPublicKey(res.data.publicKey);
      setPrivateKey(res.data.privateKey);
    } catch (err) { alert("Lỗi tạo khóa!"); }
  };

  // 2. API Mã hóa (Dùng Public Key)
  const handleEncrypt = async () => {
    if (!text || !publicKey) {
      setResult("Lỗi: Vui lòng nhập đầy đủ Nội dung và Public Key!");
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/rsa/encrypt', {
        publicKey, plaintext: text
      });
      setResult(res.data.ciphertext);
    } catch (err) { setResult("Lỗi: Kiểm tra lại định dạng Public Key!"); }
  };

  // 3. API Giải mã (Dùng Private Key)
  const handleDecrypt = async () => {
    if (!text || !privateKey) {
      setResult("Lỗi: Vui lòng nhập đầy đủ Ciphertext và Private Key!");
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/rsa/decrypt', {
        privateKey, ciphertext: text
      });
      setResult(res.data.plaintext);
    } catch (err) { setResult("Lỗi: Giải mã thất bại (Sai Private Key hoặc Ciphertext)!"); }
  };

  //try again
  const handleReset = () => {
    setPublicKey('');
    setPrivateKey('');
    setText('');
    setResult('');
  };

  return (
    <div className="form-card">
      <button onClick={generateKeys} className="btn-gen" style={{marginBottom: '15px'}}>
        Tạo Cặp Khóa RSA mới
      </button>

      <div className="form-group">
        <label>Public Key (Dùng để mã hóa)</label>
        <textarea value={publicKey} onChange={(e) => setPublicKey(e.target.value)} rows="4" />
      </div>

      <div className="form-group">
        <label>Private Key (Dùng để giải mã)</label>
        <textarea value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} rows="4" />
      </div>

      <div className="form-group">
        <label>Nội dung (Plaintext hoặc Ciphertext)</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhập vào đây..." />
      </div>

      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={handleEncrypt} className="btn-submit">Mã hóa RSA</button>
        <button onClick={handleDecrypt} className="btn-submit" style={{backgroundColor: '#e67e22'}}>Giải mã RSA</button>
      </div>

      <ResultBox label="Kết quả RSA" result={result} onReset={handleReset}/>
    </div>
  );
}

export default AsymmetricForm;