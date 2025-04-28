import './Home.css';

function Projects() {
  return (
    <div className="home">
      <div className="home-welcome" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        PROJECTS PAGE
      </div>
      <div className="home-intro" style={{ textAlign: 'justify', maxWidth: 900, margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-color)' }}>
        <strong>My Projects:</strong>
        <br /><br />
        <strong>1. Creative Portfolio Website</strong><br />
        <strong>Role:</strong> UI/UX Designer<br />
        <strong>Description:</strong><br />
        Designed and developed a responsive personal portfolio to showcase my creative projects, skills, and design philosophy. Emphasized minimalism, accessibility, and visual storytelling.
        <br />
        <strong>Technologies Used:</strong>
        <ul style={{ marginTop: '0.5rem', marginBottom: '1.2rem', paddingLeft: '1.5rem' }}>
          <li>Figma (Design and Prototyping)</li>
          <li>HTML, CSS (Frontend Structure and Styling)</li>
          <li>Flutter (Mobile Responsive Version)</li>
        </ul>
        <strong>2. Habit Tracker Mobile App</strong><br />
        <strong>Role:</strong> UI/UX Designer and Researcher<br />
        <strong>Description:</strong><br />
        Developed a mobile app prototype aimed at helping users build positive habits through intuitive design, gamification elements, and a clean, motivating interface. Conducted surveys and user testing to refine the app's flow and user engagement features.
        <br />
        <strong>Technologies Used:</strong>
        <ul style={{ marginTop: '0.5rem', marginBottom: '1.2rem', paddingLeft: '1.5rem' }}>
          <li>Figma (Prototyping)</li>
          <li>Flutter (UI Development)</li>
          <li>Firebase (Prototype Backend Simulation)</li>
        </ul>
        <em>(More exciting projects coming soon!)</em>
      </div>
    </div>
  );
}

export default Projects;