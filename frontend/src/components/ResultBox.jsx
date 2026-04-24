import React from 'react';

function ResultBox({ label, result }) {
  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert("Đã copy vào bộ nhớ tạm!");
    }
  };

  return (
    <div className="result-area">
      <div className="result-header">
        <span>{label}:</span>
        <button type="button" className="btn-copy" onClick={handleCopy}>
          📋 Copy
        </button>
      </div>
      <div className="result-content">
        {result || "Chưa có kết quả..."}
      </div>
    </div>
  );
}

export default ResultBox;