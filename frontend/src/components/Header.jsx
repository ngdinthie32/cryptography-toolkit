import React from 'react';

function Header({ activeTab, setActiveTab }) {
  return (
    <header className="header-container">
      <h1 className="logo">Cryptography Toolkit</h1>
      <nav className="main-menu">
        <button 
          className={activeTab === 'symmetric' ? 'active' : ''} 
          onClick={() => setActiveTab('symmetric')}
        >
          Symmetric
        </button>
        <button 
          className={activeTab === 'asymmetric' ? 'active' : ''} 
          onClick={() => setActiveTab('asymmetric')}
        >
          Asymmetric
        </button>
        <button 
          className={activeTab === 'hash' ? 'active' : ''} 
          onClick={() => setActiveTab('hash')}
        >
          Hash
        </button>
      </nav>
    </header>
  );
}

export default Header;