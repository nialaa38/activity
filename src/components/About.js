import './Home.css';

function About() {
  return (
    <div className="home">
      <div className="home-welcome" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        ABOUT PAGE
      </div>
      <div className="home-intro" style={{ textAlign: 'justify', maxWidth: 900, margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-color)' }}>
        <strong>About Me:</strong><br />
        Hello! I'm an aspiring visual, user interface, and user experience designer, currently a third-year Bachelor of Science in Information Technology (BSIT) student. I am passionate about crafting engaging digital experiences, intuitive user interfaces, and impactful visual stories.
        <br /><br />
        <strong>Personal Background:</strong><br />
        From a young age, I've always been fascinated by the way technology connects people and tells stories. This curiosity led me to pursue a career that combines creativity, technology, and user-centered design.
        <br /><br />
        <strong>Hobbies and Interests:</strong>
        <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>Digital illustration and visual storytelling</li>
          <li>Exploring new UI/UX design trends</li>
          <li>Coding basic front-end projects</li>
          <li>Photography and creative writing</li>
        </ul>
        <br />
        I am continuously learning and excited to collaborate with other creative minds to bring meaningful ideas to life.
      </div>
    </div>
  );
}

export default About;