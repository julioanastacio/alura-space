import React from 'react'
import popularPhotos from './popular-photos.json'
import styles from './Popular.module.scss'

export default function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__image}>
        {popularPhotos.map((popularPhoto) => {
          return (
            <li key={popularPhoto.id}>
              <img src={popularPhoto.path} alt={popularPhoto.alt} />
            </li>
          )
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  )
}
