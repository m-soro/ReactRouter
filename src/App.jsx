/**
 * -------------
 * REACT ROUTER
 * -------------
 * First is install React Router in the project `npm install react-router-dom@6`
 * Second is configure the main.jsx - do all the neccessary imports and configure the route paths
 */

import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
