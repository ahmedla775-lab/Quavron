import Editor from "@monaco-editor/react";

function App() {

return (

<div className="dashboard">

  {/* SIDEBAR */}

  <aside className="sidebar">

    <div>

      <h2>🚀 Quavron</h2>

      <p className="subtitle">

        Next Generation Platform

      </p>

    </div>

    {/* NAVIGATION */}

    <nav className="nav">

      <h3>PLATFORM</h3>

      <ul>

        <li>🏠 Dashboard</li>

        <li>💻 Cloud IDE</li>

        <li>🤖 AI Workspace</li>

        <li>📚 Courses</li>

        <li>🌐 Community</li>

        <li>🛒 Marketplace</li>

        <li>☁ Hosting</li>

        <li>💼 Freelance</li>

        <li>📊 Analytics</li>

        <li>⚙ Settings</li>

      </ul>

    </nav>

  </aside>

  {/* MAIN */}

  <main className="main">

    {/* TOPBAR */}

    <header className="topbar">

      <div>

        <h1>

          Quavron Platform

        </h1>

        <p>

          Build • Learn • Deploy • Collaborate

        </p>

      </div>

      <button className="primary">

        Launch IDE

      </button>

    </header>

    {/* CARDS */}

    <section className="cards">

      <div className="card">

        <h3>Projects</h3>

        <p>12 Active Projects</p>

      </div>

      <div className="card">

        <h3>Deployments</h3>

        <p>5 Running Apps</p>

      </div>

      <div className="card">

        <h3>AI Usage</h3>

        <p>1.2M Tokens</p>

      </div>

      <div className="card">

        <h3>Courses</h3>

        <p>84 Lessons</p>

      </div>

    </section>

    {/* WORKSPACE */}

    <section className="workspace-grid">

      {/* IDE */}

      <div className="workspace-card">

        <h2>💻 Cloud IDE</h2>

        <p>

          AI Powered Development Environment

        </p>

        <Editor

          height="350px"

          defaultLanguage="javascript"

          theme="vs-dark"

          defaultValue={`function hello() {

console.log("Welcome to Quavron 🚀");

}

hello();`}

          options={{

            fontSize: 14,

            minimap: {

              enabled: false

            },

            automaticLayout: true

          }}

        />

      </div>

      {/* AI */}

      <div className="workspace-card">

        <h2>🤖 AI Assistant</h2>

        <div className="ai-message">

          AI: Generate React Login Page

        </div>

        <div className="ai-message user">

          You: Create dashboard UI

        </div>

        <input

          type="text"

          placeholder="Ask Quavron AI..."

        />

      </div>

      {/* COURSES */}

      <div className="workspace-card">

        <h2>📚 Courses</h2>

        <ul>

          <li>React Masterclass</li>

          <li>Node.js Backend</li>

          <li>AI Engineering</li>

          <li>Cyber Security</li>

        </ul>

      </div>

      {/* COMMUNITY */}

      <div className="workspace-card">

        <h2>🌐 Community</h2>

        <p>

          Ahmed shared a new project 🚀

        </p>

        <p>

          New AI Extension released

        </p>

      </div>

    </section>

  </main>

</div>

);

}

export default App;
