import React from 'react';
import home from '../../assets/icon/home-ativo.png';
import maisCurtidas from '../../assets/icon/mais-curtidas-inativo.png';
import maisVistas from '../../assets/icon/mais-vistas-inativo.png';
import novas from '../../assets/icon/novas-inativo.png';
import surpreendaMe from '../../assets/icon/surpreenda-me-inativo.png';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={home} alt='' />
          <a href='/'>Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt='' />
          <a href='/'>Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt='' />
          <a href='/'>Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt='' />
          <a href='/'>Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt='' />
          <a href='/'>Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
