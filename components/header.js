import Link from 'next/link'

function Header() {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link href='/'>Index</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/about'>Contact</Link>
                </li>
                <li>
                    <Link href='/about'>Blog</Link>
                </li>
            </ul>
        </nav>

    </div>
  }
  
  export default Header