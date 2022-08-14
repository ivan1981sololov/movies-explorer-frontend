import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__title-container'>
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      </div>
      <div className='footer__main-container'>
        <p className="footer__author">© {new Date().getFullYear()}</p>
        <ul className='footer__link-list'>
          <li><a className='footer__link-item' href='https://praktikum.yandex.ru/' target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</a></li>
          <li><a className='footer__link-item' href='https://github.com/ivan1981sololov/' target='_blank' rel='noopener noreferrer'>Github</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;