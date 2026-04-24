import React, { useState } from 'react';
import axios from 'axios';
import ResultBox from './ResultBox';

function HashForm() {
  const [text, setText] = useState('');
  const [algo, setAlgo] = useState('MD5');
  const [result, setResult] = useState('');

  const handleHash = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/crypto/hash', {
        text, algorithm: algo
      });
      if (res.data.success) setResult(res.data.result);
    } catch (err) { setResult("Lỗi hệ thống hàm băm!"); }
  };

  return (
    <div className="form-card">
      <form onSubmit={handleHash}>
        <div className="form-group">
          <label>Nhập nội dung cần băm (Hash)</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Chọn thuật toán băm</label>
          <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
            <option value="MD5">MD5</option>
            <option value="SHA256">SHA-256</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Băm dữ liệu</button>
      </form>
      <ResultBox label="Mã Hash (Hàm băm)" result={result} />
    </div>
  );
}

export default HashForm;