import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Foot from "./Components/Foot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="test text-white px-30 h-full w-full items-center [background:radial-gradient(25%_125%_at_50%_10%,#000_40%,#00e5ff_800%)]">
        <Nav />
        <Main />
        <Projects />
        <Foot />
      </div>
    </>
  );
}

export default App;
