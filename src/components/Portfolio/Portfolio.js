import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <a href='https://github.com/ivan1981sololov/how-to-learn' target='_blank' rel='noopener noreferrer' className='portfolio__project-container'>
        <p className='portfolio__project-title'>Статичный сайт</p>
        <div className='portfolio__link'></div>
      </a>
      <a href='https://ivan1981sololov.github.io/russian-travel/' target='_blank' rel='noopener noreferrer' className='portfolio__project-container'>
        <p className='portfolio__project-title'>Адаптивный сайт</p>
        <div className='portfolio__link'></div>
      </a>
      <a href='https://domain.students.cohort-39.nomoredomains.xyz/' target='_blank' rel='noopener noreferrer' className='portfolio__project-container'>
        <p className='portfolio__project-title'>Одностраничное приложение</p>
        <div className='portfolio__link'></div>
      </a>
    </section>
  );
}

export default Portfolio;