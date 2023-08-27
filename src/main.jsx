import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import the page components
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import History from "./components/History.jsx";

// import browser router, route and routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // wrap the app in broserrouter to give the app information about routing and where you are
  <BrowserRouter>
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
  </BrowserRouter>
);
