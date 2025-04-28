import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="editorial-header">
      <div className="editorial-header-inner">
        <div className="editorial-title">
          <span className="upper-nav">Aila Niala</span>
          <span className="small-text">Aspiring visual designer</span>
        </div>
        <nav className="editorial-nav upper-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/education" className="nav-link">Education</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;