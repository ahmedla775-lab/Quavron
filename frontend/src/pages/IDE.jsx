import Editor from "@monaco-editor/react";

function IDE() {

return (

<div>

  <h1>💻 Cloud IDE</h1>

  <p>AI Powered Development Environment</p>

  <div className="editor">

    <Editor
      height="500px"
      defaultLanguage="javascript"
      theme="vs-dark"
      defaultValue={`function hello() {

console.log("Welcome to Quavron 🚀");

}

hello();`}
/>

  </div>

</div>

);

}

export default IDE;
