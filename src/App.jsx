import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import "./App.css";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

const wcHelloWorld = reactToWebComponent(HelloWorld, React, ReactDOM, {
  dashStyleAttributes: true,
});

customElements.define("r2w-hello-world", wcHelloWorld);

function App() {
  return (
    <>
      <r2w-hello-world></r2w-hello-world>
    </>
  );
}

export default App;
