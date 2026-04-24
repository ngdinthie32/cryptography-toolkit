import React, { useState } from 'react';
import Header from './components/Header';
import SymmetricForm from './components/SymmetricForm';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('symmetric');

  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="content">
        {activeTab === 'symmetric' && <SymmetricForm />}
        {activeTab === 'asymmetric' && <div className="placeholder">Asymmetric Form đang cập nhật...</div>}
        {activeTab === 'hash' && <div className="placeholder">Hash Form đang cập nhật...</div>}
      </main>
    </div>
  );
}

export default App;