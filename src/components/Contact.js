import './Home.css';

function Contact() {
  return (
    <div className="home">
      <div className="home-welcome" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        CONTACT PAGE
      </div>
      <div className="home-intro" style={{ textAlign: 'justify', maxWidth: 900, margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-color)' }}>
        <div style={{ textAlign: 'justify', fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '1.2rem' }}>Get in Touch:</div>
        I'd love to collaborate or simply connect! Feel free to reach out
        <br /><br />
        <strong>Email:</strong> <a href="mailto:nialaaila38@gmail.com">nialaaila38@gmail.com</a><br />
        <strong>GitHub:</strong> <a href="https://github.com/nialaa38" target="_blank" rel="noopener noreferrer">https://github.com/nialaa38</a>
        <br /><br />
        You can also send me a message through my social media accounts — let's bring creative ideas to life together!
      </div>
    </div>
  );
}

export default Contact;