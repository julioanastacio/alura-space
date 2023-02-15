import React from 'react';
import facebook from './facebook.svg';
import styles from './Footer.module.scss';
import instagram from './instagram.svg';
import twitter from './twitter.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a href='/' target='_blank' rel='noreferrer'>
          <img src={facebook} alt='ícone do facebook' />
        </a>
        <a href='/' target='_blank' rel='noreferrer'>
          <img src={twitter} alt='ícone do twitter' />
        </a>
        <a href='/' target='_blank' rel='noreferrer'>
          <img src={instagram} alt='ícone do instagram' />
        </a>
      </div>
      <p>Desenvolvido por Julio</p>
    </footer>
  );
}
