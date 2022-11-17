import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';
import DrawerLeft from './DrawerLeft';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <DrawerLeft isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <Navbar setDrawerOpen={setDrawerOpen} />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
