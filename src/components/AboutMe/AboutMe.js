import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/me.png';

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__title-container'>
        <h2 className='about-me__title'>Студент</h2>
      </div>
      <div className='about-me__main-container'>
        <div className='about-me__description-container'>
          <h2 className='about-me__main-title'>Виталий</h2>
          <p className='about-me__main-subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className='about-me__social-list'>
            <li ><a href='https://github.com/ivan1981sololov' target='_blank' rel='noopener noreferrer' className='about-me__social-item'>Github</a></li>
          </ul>
        </div>
        <img src={myPhoto} className='about-me__avatar' alt='me' />
      </div>
    </section>
  );
}

export default AboutMe;