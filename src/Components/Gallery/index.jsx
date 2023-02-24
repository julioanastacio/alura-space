import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Gallery.module.scss'
import photos from './photos.json'
import Cards from './Cards'

export default function Galley() {
  const [items, setItems] = useState(photos)
  const tags = [...new Set(photos.map((value) => value.tag))]

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag
    })

    setItems(newPhotos)
  }

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filterPhotos={filterPhotos} setItems={setItems} />
      <Cards items={items} styles={styles} />
    </section>
  )
}
