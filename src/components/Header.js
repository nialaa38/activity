import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#222', padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/" style={{ color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff' }}>About Me</Link>
        <Link to="/education" style={{ color: '#fff' }}>Education</Link>
        <Link to="/projects" style={{ color: '#fff' }}>Projects</Link>
        <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;