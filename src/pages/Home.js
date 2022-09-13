import Hero from "../components/Hero";
import UrlInput from "../components/UrlInput";

function Home() {
  return (
    <>
      <div className="App-body">
        <Hero />
        <div style={{ marginTop: "36px", maxWidth: "550px", width: "80%" }}>
          <UrlInput />
        </div>
      </div>
    </>
  );
}

export default Home;
