import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [recommendations, setRecommendations] = useState([
    { id: 1, name: "João Silva", text: "Excelente desenvolvedor, muito focado em resultados. Sempre traz inovações para o time." },
    { id: 2, name: "Maria Oliveira", text: "Ótima capacidade técnica e trabalho em equipe. Liderou projetos complexos com maestria." },
    { id: 3, name: "Carlos Souza", text: "Sempre entrega código limpo e bem documentado. Um profissional exemplar no desenvolvimento." }
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
      {/* Header with Glassmorphism Effect */}
      <header className="header">
        <div className="styled-name">LEONARDO MARTINS</div>
        <nav className="navbar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#recommendations">Recommendations</a></li>
          </ul>
        </nav>
      </header>

      {/* Floating Home Icon */}
      <div className="home-icon">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Home" /></a>
      </div>

      <main>
        {/* About Me Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <div className="about-content">
            <img src="https://github.com/le0nardomartins.png" alt="Profile" className="profile-photo" />
            <div className="about-text">
              <h3>Full Stack Developer</h3>
              <p>Olá! Eu sou o Leonardo, um desenvolvedor apaixonado por tecnologia, focado em criar soluções digitais inovadoras e eficientes. Atualmente, dedico-me ao desenvolvimento de aplicações web modernas utilizando as melhores práticas do mercado.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
              <span>JavaScript (ES6+)</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Selected Projects</h2>
          <div className="projects-list">
            <div className="project-card">
              <h3>E-commerce API</h3>
              <p>Uma API robusta para gerenciamento de lojas virtuais, com autenticação JWT e integração com banco de dados.</p>
              <strong>Node.js • Express • MongoDB</strong>
            </div>
            <div className="project-card">
              <h3>Task Manager Pro</h3>
              <p>Sistema completo de gerenciamento de tarefas com filtros, prioridades e notificações em tempo real.</p>
              <strong>React • Firebase • Tailwind</strong>
            </div>
            <div className="project-card">
              <h3>Global Solution FIAP</h3>
              <p>Projeto acadêmico focado em hardware e software para automação e monitoramento de sistemas.</p>
              <strong>C++ • ESP32 • Python</strong>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section id="recommendations" className="section">
          <h2>Recommendations</h2>
          <div className="recommendations-list">
            {recommendations.map(rec => (
              <div key={rec.id} className="recommendation-card">
                <p>{rec.text}</p>
                <h4>{rec.name}</h4>
              </div>
            ))}
          </div>

          <div className="add-recommendation">
            <h3>Add a Recommendation</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} 
                required 
              />
              <textarea 
                placeholder="Your Message..." 
                rows="4"
                value={newText} 
                onChange={(e) => setNewText(e.target.value)} 
                required 
              ></textarea>
              <button type="submit">Submit Recommendation</button>
            </form>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px 0', color: '#64748b', fontSize: '0.9rem' }}>
        © 2026 Leonardo Martins. All rights reserved.
      </footer>
    </div>
  )
}

export default App
