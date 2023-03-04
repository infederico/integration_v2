import styles from './Nav.module.css';
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import menuDark from '../../assets/images/menu-dark-theme.png';
import menuActive from '../../assets/images/menu-active.png';
import ToggleTheme from '../ThemeToggle/ThemeToggle';
import LogOut from '../LogOut/LogOut';

const Nav = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.nav}>
      
      <button className={styles.hamburgerButton} onClick={toggleMenu} title='menu'>
        <img src={ menuOpen ? menuActive : menuDark } alt='menuIcon' />
      </button>
      {menuOpen && (
        <label className={styles.menu.open}>
          <div className={styles.navLinks}>
            <NavLink to='/characters'>Characters</NavLink>
            <NavLink to='/episodes'>Episodes</NavLink>
            <NavLink to='/locations'>Locations</NavLink>
            <NavLink to='/about'>About</NavLink>
          </div>
        </label>
      )}

      <img
        src={logo} alt='logo'
        className={styles.logo}
        onClick={() => navigate('/home')}
        title='home'
      />

      <ToggleTheme />
      
      {menuOpen &&
      <LogOut />
      }

    </div>
  );
};

export default Nav;
