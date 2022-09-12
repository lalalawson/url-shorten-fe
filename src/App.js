import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import UrlInput from "./components/UrlInput";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <Hero />
        <div style={{ marginTop: "36px", maxWidth: "550px", width: "80%" }}>
          <UrlInput />
        </div>
      </div>
    </div>
  );
}

export default App;
