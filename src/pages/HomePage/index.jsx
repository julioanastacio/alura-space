import Banner from '../../Components/Banner';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <Banner />
        </section>
      </main>
    </>
  );
}
