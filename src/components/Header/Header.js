import React from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {

  const { loggedIn } = props;

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
            <button className='header__burger'></button>
          <Navigation />
        </>
      )}
    </section>
  );
}

export default Header;