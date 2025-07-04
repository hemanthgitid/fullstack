import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../css/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = ({ onToggleForm }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

 

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>⟪ BucketStudy ⟫</div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/" onClick={toggleMenu}>Courses</Link></li>
          <li><Link to="/" onClick={toggleMenu}>Contact</Link></li>
<li>
  <button className={styles.navButton} onClick={onToggleForm}>Registration</button>
</li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;