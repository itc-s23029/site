import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen(prev => !prev)
  }

  const cloceNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className='sr-only'>MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            <span onClick={cloceNav}>Home</span>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <span onClick={cloceNav}>About</span>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <span onClick={cloceNav}>Blog</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
