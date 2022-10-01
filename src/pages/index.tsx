import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Damasio Business</title>
        <meta name="description" content="Grandes investimentos começam aqui" />
        <meta property="og:title" content="Damasio Business" />
        <meta property="og:description" content="Grandes investimentos começam aqui"/>
        <meta property="og:url" content="https://app.damasio.mission.dev.br" />
        <meta property="og:image" content="/logo-social.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo à <a href="#">Damasio Business</a>
        </h1>

        <p className={styles.description}>
          Grandes investimentos começam aqui
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Consultoria 🔐</h2>
            <p></p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Simulações 💎</h2>
            <p></p>
          </a>

        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
export default Home
