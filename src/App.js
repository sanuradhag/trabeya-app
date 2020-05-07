import React from 'react';
import './App.css';

import ChangePassword from "./views/change-password/ChangePassword";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <div>
        <Header />
        <ChangePassword/>
        <Footer />
      </div>
  );
}

export default App;
