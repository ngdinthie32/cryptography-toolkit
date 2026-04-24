import React, { useState } from 'react';
import axios from 'axios';
import ResultBox from './ResultBox';

function HashForm() {
  const [text, setText] = useState('');
  const [algo, setAlgo] = useState('MD5');
  const [result, setResult] = useState('');
  // State để lưu mã Hash người dùng nhập vào để đối chiếu
  const [hashToVerify, setHashToVerify] = useState('');
  const [status, setStatus] = useState(null); // 'success', 'fail', hoặc null

  const handleHash = async (e) => {
    e.preventDefault();
    setStatus(null); 
    try {
      // Gửi yêu cầu băm dữ liệu lên Server
      const res = await axios.post('http://localhost:5000/api/crypto/hash', {
        text, 
        algorithm: algo
      });

      if (res.data.success) {
        const newHash = res.data.result;
        setResult(newHash);

        // Logic "Đối chiếu" để xác thực nội dung (thay cho giải mã)
        if (hashToVerify) {
          if (hashToVerify.trim() === newHash) {
            setStatus('success');
          } else {
            setStatus('fail');
          }
        }
      }
    } catch (err) { 
      setResult("Lỗi hệ thống hàm băm!"); 
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
      <form onSubmit={handleHash}>
        {/* Bước 1: Nhập nội dung gốc */}
        <div className="form-group">
          <label>Nhập nội dung cần băm (Plaintext)</label>
          <textarea 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Nhập nội dung tại đây..."
            required 
          />
        </div>

        {/* Bước 3: Chọn thuật toán */}
        <div className="form-group">
          <label>Chọn thuật toán băm</label>
          <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
            <option value="MD5">MD5</option>
            <option value="SHA256">SHA-256</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Băm dữ liệu & Kiểm tra</button>
      </form>

      {/* Hiển thị thông báo trạng thái đối chiếu giống trong ảnh */}
      {status === 'success' && (
        <div style={{ color: 'green', marginTop: '10px', fontWeight: 'bold' }}>
          ✅ Khớp! Nội dung trùng khớp với mã Hash.
        </div>
      )}
      {status === 'fail' && (
        <div style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>
          ❌ Không khớp! Mã Hash và nội dung không trùng nhau.
        </div>
      )}

      {/* Hiển thị kết quả kèm nút Copy và Try Again theo UX Flow */}
      <ResultBox label="Mã Hash kết quả" result={result} onReset={handleReset}/>
    </div>
  );
}

export default HashForm;