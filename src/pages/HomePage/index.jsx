import Banner from 'Components/Banner'
import Footer from 'Components/Footer'
import Galley from 'Components/Gallery'
import Header from 'Components/Header'
import Menu from 'Components/Menu'
import Popular from 'Components/Popular'
import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.gallery}>
          <Galley />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  )
}
