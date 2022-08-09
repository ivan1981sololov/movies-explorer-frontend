import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета <span className='promo__title-span'>Веб-разработки.</span></h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link to='/' className='promo__link'>Узнать больше</Link>
      </div>
      <div className='promo__landing-pic' />
    </section>
  );
}

export default Promo;