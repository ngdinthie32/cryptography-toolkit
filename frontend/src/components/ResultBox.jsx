function ResultBox({ label, result, onReset }) {
  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert("Đã copy!");
    }
  };

  return (
    <div className="result-area">
      <div className="result-header">
        <span>{label}:</span>
        <div style={{display: 'flex', gap: '5px'}}>
           <button type="button" className="btn-copy" onClick={handleCopy}>📋 Copy</button>
           {/* Nút Try Again để reset form theo UX Flow */}
           <button type="button" className="btn-copy" onClick={onReset}>🔄 Try Again</button>
        </div>
      </div>
      <div className="result-content">{result || "Chờ xử lý..."}</div>
    </div>
  );
}

export default ResultBox;