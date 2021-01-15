//imports
import Link from 'next/link';
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a> Home</a>
          </Link>
          <Link href="/about">
            <a> About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
