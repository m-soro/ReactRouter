# React Router

```jsx
// About Component

// this will make the history component appear
import { Outlet } from "react-router";
import Nav from "./Nav";

export default function About() {
  return (
    <div>
      <Nav />
      <h1>About Page</h1>
      <Outlet />
    </div>
  );
}
```

```jsx
// Nav Component

import Nav from "./Nav";

export default function Contact() {
  return (
    <div>
      <Nav />
      <h1>Contact Me</h1>
    </div>
  );
}
```

```jsx
// History Component

// This Page will be nested inside the About page
// Need to configure the route

export default function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}
```

```jsx
// Home Component

export default function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>
  );
}
```

```jsx
// Nav Component

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
```

```jsx
// App.JSX

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
```

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import the page components
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import History from "./components/History.jsx";

// import browser router, route and routes
// import { BrowserRouter, Routes, Route } from "react-router-dom"; use hashrouter for github

import { HashRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  // wrap the app in broserrouter to give the app information about routing and where you are
  // <BrowserRouter>
  <HashRouter>
    {/* // configure the paths to display inside Routes*/}
    <Routes>
      <Route path="/" element={<App />} />
      {/* configure to nest the history page here close this tag and put in another route*/}
      <Route path="/about" element={<About />}>
        {/* insert the component and path notice no slash*/}
        <Route path="history" element={<History />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {/* // </BrowserRouter>  use hashRouter for github*/}
  </HashRouter>
);
```
