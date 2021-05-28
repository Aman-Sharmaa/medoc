import React from "react";

const App = () =>{
  return <>
  <div className="main_div">
      <div className="center-div">
          <br />
          <h1>Todo list</h1>
          <input type="text" placeholder="add item" />
          <button>add</button>

          <ol>
              <li>Buy apple</li>
          </ol>
      </div>
       </div>
  </>
};

export default App;