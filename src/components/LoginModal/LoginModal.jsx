import React from 'react';
import PropTypes from 'prop-types'; // Importando o PropTypes para validação
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Se o modal não estiver aberto, ele não será renderizado

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de login
    console.log('Usuário logado');
    onClose(); // Fechar o modal após login
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <button className="close-btn" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

// Definindo as validações de tipo para as propriedades
LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // 'isOpen' deve ser um booleano
  onClose: PropTypes.func.isRequired, // 'onClose' deve ser uma função
};

export default LoginModal;
