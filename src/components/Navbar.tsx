import Link from 'next/link';
import '@/styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          Rak Blog
        </Link>
        <div className="navbar-links">
          <Link href="/" className="navbar-link">Home</Link>
          <Link href="/" className="navbar-link">Introduction</Link>
          <Link href="/" className="navbar-link">List</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;