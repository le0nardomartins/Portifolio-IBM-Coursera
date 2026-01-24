import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [recommendations, setRecommendations] = useState([
    { id: 1, name: "João Silva", text: "Excelente desenvolvedor, muito focado em resultados." },
    { id: 2, name: "Maria Oliveira", text: "Ótima capacidade técnica e trabalho em equipe." },
    { id: 3, name: "Carlos Souza", text: "Sempre entrega código limpo e bem documentado." }
  ]);

  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newText) {
      const newRec = {
        id: Date.now(),
        name: newName,
        text: newText
      };
      setRecommendations([...recommendations, newRec]);
      setNewName("");
      setNewText("");
      alert("Thank you for your recommendation!");
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navbar & Styled Name */}
      <header className="header">
        <div className="styled-name">Leonardo Portfolio</div>
        <nav className="navbar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Project details</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#recommendations">Recommendations</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Icon */}
      <div className="home-icon">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Home" /></a>
      </div>

      <main>
        {/* About Me Section */}
        <section id="about" className="section about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <img src="https://via.placeholder.com/150" alt="Profile" className="profile-photo" />
            <div className="about-text">
              <h3>Leonardo</h3>
              <p>Sou um desenvolvedor apaixonado por tecnologia, focado em criar soluções eficientes e elegantes para problemas complexos.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" />
              <span>HTML5</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" />
              <span>CSS3</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JS" />
              <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" />
              <span>React</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <div className="projects-list">
            <div className="project-card">
              <h3>E-commerce API</h3>
              <p>Uma API robusta para gerenciamento de lojas virtuais.</p>
              <p><strong>Tech:</strong> Node.js, Express, MongoDB</p>
            </div>
            <div className="project-card">
              <h3>Task Manager</h3>
              <p>Aplicativo de gerenciamento de tarefas com autenticação.</p>
              <p><strong>Tech:</strong> React, Firebase</p>
            </div>
            <div className="project-card">
              <h3>Weather App</h3>
              <p>Consulta de clima em tempo real usando API externa.</p>
              <p><strong>Tech:</strong> JavaScript, OpenWeather API</p>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section id="recommendations" className="section recommendations-section">
          <h2>Recommendations</h2>
          <div className="recommendations-list">
            {recommendations.map(rec => (
              <div key={rec.id} className="recommendation-card">
                <p>"{rec.text}"</p>
                <h4>- {rec.name}</h4>
              </div>
            ))}
          </div>

          <div className="add-recommendation">
            <h3>Leave a Recommendation</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} 
                required 
              />
              <textarea 
                placeholder="Your Recommendation" 
                value={newText} 
                onChange={(e) => setNewText(e.target.value)} 
                required 
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
