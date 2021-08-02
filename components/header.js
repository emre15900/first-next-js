import Link from 'next/link'
import styles from './header.module.scss'

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li className={styles.test}>
            <Link href="/">
              <a className={styles.link}>Index</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.about}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a style={{ color: 'orange' }}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.about}>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
