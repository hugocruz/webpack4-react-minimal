import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>Webpack 4 and React!</p>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));