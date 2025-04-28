function Projects() {
    return (
      <section style={{ padding: '2rem' }}>
        <h2>Projects</h2>
        <div>
          <h3>1. Student Management System</h3>
          <p>
            A web application to manage student records, grades, and attendance. Built using React.js, Node.js, and MongoDB.
          </p>
          <p>
            <strong>Technologies:</strong> React.js, Node.js, MongoDB, Express.js
          </p>
          <a href="https://github.com/yourusername/student-management-system" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <h3>2. Personal Portfolio Website</h3>
          <p>
            My own portfolio website to showcase my projects and skills. Fully responsive and deployed on Vercel.
          </p>
          <p>
            <strong>Technologies:</strong> React.js, CSS, Vercel
          </p>
          <a href="https://github.com/yourusername/personal-portfolio" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </section>
    );
  }
  
  export default Projects;