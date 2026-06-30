import Editor from "@monaco-editor/react";

function App() {

return (

<div className="dashboard">

  {/* SIDEBAR */}

  <aside className="sidebar">

    <h2>🚀 Quavron</h2>

    <ul>

      <li>🏠 Dashboard</li>

      <li>📁 Projects</li>

      <li>🤖 AI Assistant</li>

      <li>💻 Terminal</li>

      <li>☁ Deploy</li>

      <li>⚙ Settings</li>

    </ul>

  </aside>

  {/* MAIN */}

  <main className="main">

    {/* TOPBAR */}

    <header className="topbar">

      <h1>Cloud IDE Dashboard</h1>

      <button className="primary">

        New Project

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

    </section>

    {/* REAL EDITOR */}

    <section className="editor">

      <Editor

        height="500px"

        defaultLanguage="javascript"

        theme="vs-dark"

        defaultValue={`function hello() {

console.log("Welcome to Quavron 🚀");

}

hello();`}

      />

    </section>

  </main>

</div>

);

}

export default App;
