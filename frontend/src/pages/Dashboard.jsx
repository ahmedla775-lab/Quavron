import { useNavigate } from "react-router-dom";

import {
  Rocket,
  Globe,
  Code2,
  Cpu,
  Cloud,
  Users,
  Sparkles
} from "lucide-react";

import { motion } from "framer-motion";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="dashboard-page">

      {/* HERO */}

      <motion.section
        className="hero-section"
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
      >

        <div className="hero-left">

          <div className="hero-badge">

            <Sparkles size={16} />

            <span>
              QUAVRON ECOSYSTEM
            </span>

          </div>

          <h1>
            Build The Future
          </h1>

          <h2>
            AI Powered Developer Platform
          </h2>

          <p className="hero-text">

            Cloud IDE, AI tools, hosting,
            marketplace, freelance ecosystem
            and realtime collaboration
            in one futuristic platform.

          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/ide")}
            >
              <Rocket size={18} />
              Start Building
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/community")}
            >
              <Globe size={18} />
              Explore Community
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity:0, scale:0.9 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.8 }}
        >

          <div className="ai-card">

            <div className="ai-card-top">

              <div className="live-dot"></div>

              <span>AI CORE ONLINE</span>

            </div>

            <div className="ai-terminal">

              <p>✔ AI Assistant Connected</p>
              <p>✔ GitHub Synced</p>
              <p>✔ Cloud Runtime Active</p>
              <p>✔ Realtime Collaboration</p>
              <p>✔ Deploy Engine Ready</p>

            </div>

          </div>

        </motion.div>

      </motion.section>

      {/* STATS */}

      <section className="stats-section">

        <div className="stat-card">
          <Users size={40} />
          <h2>2.4M+</h2>
          <p>Developers</p>
        </div>

        <div className="stat-card">
          <Code2 size={40} />
          <h2>410K+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <Cloud size={40} />
          <h2>12M+</h2>
          <p>Deployments</p>
        </div>

        <div className="stat-card">
          <Cpu size={40} />
          <h2>98</h2>
          <p>Countries</p>
        </div>

      </section>

      {/* PROJECTS */}

      <section className="projects-section">

        <div className="section-title">

          <h2>
            Trending Projects
          </h2>

          <button
            onClick={() => navigate("/marketplace")}
          >
            View All
          </button>

        </div>

        <div className="projects-grid">

          <div className="project-card">

            <div className="project-top">

              <h3>AI SaaS Platform</h3>

              <span>React</span>

            </div>

            <p>
              Advanced AI dashboard platform
              powered by cloud runtime.
            </p>

            <div className="project-footer">

              <button>Fork</button>

              <button>Deploy</button>

            </div>

          </div>

          <div className="project-card">

            <div className="project-top">

              <h3>Realtime Chat</h3>

              <span>Node.js</span>

            </div>

            <p>
              Realtime communication app
              with collaboration engine.
            </p>

            <div className="project-footer">

              <button>Fork</button>

              <button>Deploy</button>

            </div>

          </div>

          <div className="project-card">

            <div className="project-top">

              <h3>Cloud IDE</h3>

              <span>Vite</span>

            </div>

            <p>
              Browser based coding workspace
              powered by Monaco Editor.
            </p>

            <div className="project-footer">

              <button
                onClick={() => navigate("/ide")}
              >
                Open IDE
              </button>

              <button>Deploy</button>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Dashboard;
