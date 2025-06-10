import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Foot from "./Components/Foot";

function App() {
  return (
    <>
      <div className="gap-4 test text-white h-full w-screen items-center [background:radial-gradient(25%_125%_at_50%_10%,#000_40%,#00e5ff_800%)]">
        <Nav />
        <div className="flex items-center justify-center flex-col gap-4">
          <Main />
          <Projects />
        </div>
        <Foot />
      </div>
    </>
  );
}

export default App;
