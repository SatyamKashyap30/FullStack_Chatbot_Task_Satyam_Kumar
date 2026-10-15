import { useState } from "react";
import Chatbot from "./components/Chatbot";
import EnquiryForm from "./components/EnquiryForm";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";

function App() {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  return (
    <div className="app">
      <header className="navbar">
        <h2>DroneTV</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#courses">Courses</a>
          <a href="#chat">Chat</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
  <div>
    <p className="tagline">Drone Technology & Training</p>

    <h1>
      Explore the Future with
      <span> DroneTV</span>
    </h1>

    <p>
      Get support, explore drone services and discover training
      opportunities with our AI Support Assistant.
    </p>

    <button
      onClick={() => {
        document.getElementById("chat")?.scrollIntoView();
      }}
    >
      Talk to AI Assistant
    </button>
  </div>

  <div className="hero-card">
    <h3>DroneTV AI Assistant</h3>

    <p>Get quick support for:</p>

    <div className="hero-features">
      <span>✓ Drone Services</span>
      <span>✓ Pilot Training</span>
      <span>✓ Technical Support</span>
      <span>✓ Course Enquiries</span>
    </div>

    <p className="hero-card-bottom">
      Ask a question and get started.
    </p>
  </div>
</section>

        <section className="section" id="services">
  <h2>Our Services</h2>

  <div className="cards">     
    <div className="card">
      <h3>Drone Services</h3>
      <p>Professional drone solutions for different business needs.</p>
    </div>

    <div className="card">
      <h3>Drone Training</h3>
      <p>Learn drone technology through practical training.</p>
    </div>

    <div className="card">
      <h3>Drone Support</h3>
      <p>Get support and guidance for your drone-related queries.</p>
    </div>
  </div>
</section>

        <section className="section" id="courses">
  <h2>
  Courses & <span>Training</span>
</h2>
  <p>Learn drone technology through practical training.</p>

  <div className="cards">
    <div className="card">
      <h3>Drone Pilot Training</h3>
      <p>Learn the basics of drone flying and safe operation.</p>
    </div>

    <div className="card">
      <h3>Drone Technology</h3>
      <p>Understand drone components, technology and applications.</p>
    </div>

    <div className="card">
      <h3>Advanced Training</h3>
      <p>Improve your practical skills with advanced drone training.</p>
    </div>
  </div>
</section>

        <section className="section" id="chat">
          <h2>
  AI Support <span>Assistant</span>
</h2>
          <p>Have a question? Ask our support assistant.</p>

          <Chatbot />
        </section>

        <section className="section" id="contact">
          <EnquiryForm />
        </section>

        <section className="section" id="admin">
  {!adminLoggedIn ? (
    <AdminLogin onLogin={() => setAdminLoggedIn(true)} />
  ) : (
    <>
  <AdminDashboard />

  <button onClick={() => setAdminLoggedIn(false)}>
    Logout
  </button>
</>
  )}
</section>

      </main>

      <footer className="footer">
  <p>© 2026 DroneTV. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;