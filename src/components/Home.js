import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-welcome" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        WELCOME TO MY PORTFOLIO WEBSITE
      </div>
      <div className="home-intro" style={{ textAlign: 'justify', maxWidth: 600, margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-color)' }}>
      I am an aspiring visual, user interface, and user experience designer, and I am currently in my third year of pursuing a Bachelor of Science in Information Technology degree. I am passionate about crafting engaging digital experiences, designing intuitive user interfaces, and bringing ideas to life through visual storytelling. My work focuses on web and app design, user research, and creating meaningful interactions. I invite you to explore my portfolio to discover my projects, learn more about my journey, and connect with me for future collaborations or opportunities.
      </div>
    </div>
  );
}

export default Home;