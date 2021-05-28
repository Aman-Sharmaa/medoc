import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
function App(props) {
  return (
 <div className="cont">
  <Home />
 <About />
 <Contact />
</div>
  );
}

export default App;