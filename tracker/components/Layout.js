//imports
import Nav from './Nav.js';
import styles from '../styles/Home.module.css';
//component imports
import Head from 'next/head';
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>This is the head</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
