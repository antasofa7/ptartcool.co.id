import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';
import { dataMenu } from '../../data/menu';
import NavItem from './NavItem';
import Logo from '../../public/icons/logo';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [sticky, setSticky] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`${styles.navbar} navbar ${sticky ? 'sticky' : ''}`}>
      <div className={`${styles.logo} logo`}>
        <Link href="/">
          <a>
              <Logo sticky={sticky} />
          </a>
        </Link>
      </div>
      <Link href="#">
        <a onClick={() => setMenuActive(true)} className={`${styles.toggleMenu} toggleMenu`}>
          <svg width="100%" height="100%" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.00012207" width="30" height="4" rx="2" fill={sticky ? '#F5FFFE' : '#01322C'} />
            <rect x="-0.00012207" y="9" width="30" height="4" rx="2" fill={sticky ? '#F5FFFE' : '#01322C'} />
            <rect x="9.99988" y="18" width="20" height="4" rx="2" fill={sticky ? '#F5FFFE' : '#01322C'} />
          </svg>
        </a>
      </Link>
      <div className={`${styles.menu} menu ${menuActive && 'active'}`}>
        <Link href="#">
          <a onClick={() => setMenuActive(false)} className="btn-close">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.6445 0.575715C19.4121 -0.191909 20.6566 -0.191909 21.4243 0.575714C22.1919 1.34334 22.1919 2.5879 21.4243 3.35552L13.7798 11L21.4243 18.6445C22.1919 19.4121 22.1919 20.6567 21.4243 21.4243C20.6567 22.1919 19.4121 22.1919 18.6445 21.4243L11 13.7798L3.35552 21.4243C2.5879 22.1919 1.34334 22.1919 0.575712 21.4243C-0.19191 20.6567 -0.191909 19.4121 0.575714 18.6445L8.22019 11L0.575727 3.35552C-0.191896 2.5879 -0.191897 1.34334 0.575726 0.575714C1.34335 -0.191909 2.58791 -0.191909 3.35553 0.575715L11 8.22018L18.6445 0.575715Z"
                    fill="#F5FFFE"
                  />
              </svg>
          </a>
        </Link>
          <div className={`${styles.navItem} navItem`}>
            {dataMenu.map((menu) => {
              const activeLink = currentRoute === menu.link;
              return <NavItem key={menu.id} name={menu.name} link={menu.link} active={activeLink} />;
            })}
          </div>
      </div>
    </nav>
  );
}
