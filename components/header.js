import Link from 'next/link'
import styles from './header.module.css'

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
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
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
        }
        ul li {
          padding-right: 15px;
        }
      `}</style>

      <style global jsx>{`
       body{
           background: #ccc;
       }
      `}</style>
      
    </>
  )
}

export default Header
