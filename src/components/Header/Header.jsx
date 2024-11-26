import React, { useState } from 'react';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';
import LoginModal from '../LoginModal/LoginModal'; // Importando o modal de login

import './Header.css';

function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
        <button className="login-btn" onClick={openLoginModal}>
          Login
        </button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
}

export default Header;
