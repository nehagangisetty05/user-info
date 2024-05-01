import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <article className={styles.right}>
        <NavLink to="/" className={styles.links}>Home</NavLink>
        <NavLink to="/graph" className={styles.links}>Graph</NavLink>
      </article>
    </div>
  )
}

export default NavBar
