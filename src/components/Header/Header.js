import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ReactDOM from 'react-dom';
import './Header.css';

function Header(props) {

  const { loggedIn } = props;

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isBurgerOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  })

  const currentPath = useLocation();

  return (
    <section className='header'>
      <Link to='/'>
        <div className={`header__logo ${currentPath.pathname === '/' ? 'header__logo_shadow' : ''}`}></div>
      </Link>
      {!loggedIn && (
        <div className='header__auth-buttons'>
          <Link to='/signup' className='header__auth-item'>Регистрация</Link>
          <Link to='/signin' className='header__auth-item'>Войти</Link>
        </div>
      )}
      {loggedIn && (
        <>
          <div className='header__logged-in-films'>
            <NavLink
              to='/movies'
              className={({ isActive }) => (
                isActive ? 'header__logged-in-item header__logged-in-item_active' : 'header__logged-in-item'
              )}>Фильмы</NavLink>
            <NavLink
              to='/saved-movies' className={({ isActive }) => (
                isActive ? 'header__logged-in-item header__logged-in-item_active' : 'header__logged-in-item'
              )}>Сохранённые фильмы</NavLink>
          </div>
          <Link to='/profile' className='header__logged-in-account'>
            Аккаунт
          </Link>
          <button className='header__burger' onClick={() => setIsBurgerOpen(true)}></button>
          {ReactDOM.createPortal(
            <Navigation isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />,
            document.getElementById('burger')
          )}
        </>
      )}
    </section>
  );
}

export default Header;