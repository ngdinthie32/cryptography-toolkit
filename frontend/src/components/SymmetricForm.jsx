import React, { useState } from 'react';
import ResultBox from './ResultBox';

function SymmetricForm() {
  // Xử lý State bằng useState theo đúng yêu cầu
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState('');
  const [algo, setAlgo] = useState('AES');
  const [result, setResult] = useState('false');

  // Hàm sinh Key ngẫu nhiên (UX nâng cao)
  const generateKey = () => {
    const randomKey = Math.random().toString(36).substring(2, 18).toUpperCase();
    setKey(randomKey);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập dữ liệu trả về từ API
    setResult(`[Encrypted-${algo}] Nội dung: ${plaintext} | Key: ${key}`);
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ô nhập Plaintext</label>
          <textarea 
            placeholder="Nhập nội dung cần mã hóa..." 
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Ô nhập/sinh Key</label>
          <div className="input-row">
            <input 
              type="text" 
              placeholder="Nhập key của bạn..." 
              value={key}
              onChange={(e) => setKey(e.target.value)}
              required
            />
            <button type="button" className="btn-gen" onClick={generateKey}>Sinh Key</button>
          </div>
        </div>

        <div className="form-group">
          <label>Chọn thuật toán</label>
          <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
            <option value="AES">AES</option>
            <option value="DES">DES</option>
            <option value="Blowfish">Blowfish</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Submit</button>
      </form>

      <ResultBox label="Ciphertext" result={result} />
    </div>
  );
}

export default SymmetricForm;