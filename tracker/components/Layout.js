//imports
import Nav from './Nav.js';
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
