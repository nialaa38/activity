import './Home.css';

function Education() {
  return (
    <div className="home">
      <div className="home-welcome" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        EDUCATION PAGE
      </div>
      <div className="home-intro" style={{ textAlign: 'justify', maxWidth: 900, margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-color)' }}>
        <strong>Education:</strong><br />
        <span style={{ display: 'block', margin: '0.5rem 0' }}>
          Bachelor of Science in Information Technology (BSIT)<br />
          Third-Year Student<br />
          University of Cabuyao<br />
          2022 – Present
        </span>
        <br />
        <strong>Courses and Skills Developed:</strong>
        <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>Web Development and Design</li>
          <li>User Interface (UI) Design</li>
          <li>User Experience (UX) Research</li>
          <li>Human-Computer Interaction (HCI)</li>
          <li>Database Management</li>
          <li>Project Management in IT</li>
          <li>Visual Communication and Branding</li>
        </ul>
        <br />
        <strong>Previous Schools Attended:</strong>
        <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>University of Perpetual Help System DALTA - Calamba Campus<br />Graduated: 2022</li>
          <li>Christ the King School of Cabuyao<br />Graduated: 2020</li>
        </ul>
      </div>
    </div>
  );
}

export default Education;