import React, { useState } from 'react';
import axios from 'axios';
import ResultBox from './ResultBox';

function SymmetricForm() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [algo, setAlgo] = useState('AES');
  const [result, setResult] = useState('');

  // 1. Sinh Key từ backend
  const generateKey = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/crypto/gen-key');
      // Backend trả về { success: true, key: "..." }
      setKey(res.data.key); 
    } catch (err) { 
      alert("Không thể kết nối Server để tạo Key!"); 
    }
  };

  // 2. Xử lý Mã hóa
  const handleEncrypt = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/crypto/encrypt', {
        text: text, 
        key: key,
        algorithm: algo === '3DES' ? 'TripleDES' : algo 
      });
      setResult(res.data.result);
    } catch (err) { 
      setResult("Lỗi mã hóa: " + (err.response?.data?.message || "Hệ thống lỗi")); 
    }
  };

  // 3. Xử lý Giải mã
  const handleDecrypt = async () => {
    if (!text || !key) {
      alert("Vui lòng nhập đầy đủ Nội dung và Key!");
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/crypto/decrypt', {
        ciphertext: text, 
        key: key,
        algorithm: algo === '3DES' ? 'TripleDES' : algo
      });
      setResult(res.data.result);
    } catch (err) { 
      setResult("Lỗi giải mã: " + (err.response?.data?.message || "Sai Key hoặc dữ liệu!")); 
    }
  };

  //try again
  const handleReset = () => {
    setText('');   // Xóa nội dung nhập
    setKey('');    // Xóa key (nếu bạn muốn giữ key thì xóa dòng này)
    setResult(''); // Xóa kết quả
  };
  
  return (
    <div className="form-card">
      <form onSubmit={handleEncrypt}>
        <div className="form-group">
          <label>Nội dung (Plaintext hoặc Ciphertext)</label>
          <textarea 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Nhập nội dung tại đây..."
            required 
          />
        </div>

        <div className="form-group">
          <label>Khóa (Key)</label>
          <div className="input-row">
            <input 
              type="text" 
              value={key} 
              onChange={(e) => setKey(e.target.value)} 
              placeholder="Nhập hoặc sinh key..."
              required 
            />
            <button type="button" className="btn-gen" onClick={generateKey}>Auto-gen Key</button>
          </div>
        </div>

        <div className="form-group">
          <label>Thuật toán (Symmetric)</label>
          <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
            <option value="AES">AES</option>
            <option value="DES">DES</option>
            <option value="3DES">3DES (TripleDES)</option>
          </select>
        </div>

        <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
          <button type="submit" className="btn-submit">Mã hóa</button>
          <button 
            type="button" 
            onClick={handleDecrypt} 
            className="btn-submit" 
            style={{backgroundColor: '#e67e22'}}
          >
            Giải mã
          </button>
        </div>
      </form>
      
      <ResultBox label="Kết quả xử lý" result={result} onReset={handleReset} />
    </div>
  );
}

export default SymmetricForm;