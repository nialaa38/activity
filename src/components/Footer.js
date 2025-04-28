import './Footer.css';

function Footer() {
  return (
    <footer className="editorial-footer">
      <p className="footer-text">&copy; {new Date().getFullYear()} Aila Niala. All rights reserved.</p>
    </footer>
  );
}

export default Footer;