import React, { useState, useEffect } from "react";
import "./App.css";
import Landing from "./component/Landing";
import Navbar from "./component/Navbar";
import Contact from './component/Contact'
import Footer from "./component/Footer";
function App() {
  const [libs, setLibs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/libs")
      .then((res) => res.json())
      .then((data) => setLibs(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Landing libs={libs} setLibs={setLibs} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;