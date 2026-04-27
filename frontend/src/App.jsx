import React, { useState } from "react";
import Header from "./components/Header";
import SymmetricForm from "./components/SymmetricForm";
import AsymmetricForm from "./components/AsymmetricForm";
import HashForm from "./components/HashForm";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("symmetric");

  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="content">
        {activeTab === "symmetric" && <SymmetricForm />}
        {activeTab === "asymmetric" && <AsymmetricForm />}
        {activeTab === "hash" && <HashForm />}
      </main>
    </div>
  );
}

export default App;
