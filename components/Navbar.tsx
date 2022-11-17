import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { useRouter } from 'next/router';

const Navbar = ({ setDrawerOpen }: { setDrawerOpen: any }) => {
  const router = useRouter();

  return (
    <nav className={navStyles.nav}>
      <span className={navStyles.drawerIcon} onClick={() => setDrawerOpen(true)}>
        &#9776;
      </span>
      <ul>
        <li>
          <Link href="/" className={router.pathname == '/' ? navStyles.navActive : ''}>
            News
          </Link>
        </li>
        <li>
          <Link href="/users" className={router.pathname == '/users' ? navStyles.navActive : ''}>
            Users
          </Link>
        </li>
        <li>
          <Link href="/top-users" className={router.pathname == '/top-users' ? navStyles.navActive : ''}>
            Top Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
