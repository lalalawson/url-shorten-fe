import { useState } from "react";
import "./UrlContainer.css";

function UrlContainer(props) {
  const [isCopied, setIsCopied] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    navigator.clipboard.writeText(props.url);
    setIsCopied(true);
  }

  return (
    <>
      {/* if response was successful */}
      {props.url != "" && (
        <div className="card">
          <span className="result-text">Success!</span>
          <span>
            Your URL has been shortened! You may now copy and share the url
            below.
          </span>
          <div className="row" style={{ gap: "10px" }}>
            <input value={props.url} readOnly style={{ width: "70%" }}></input>
            <button onClick={handleClick} style={{ width: " 30%" }}>
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
      {/* if response failed */}
      {props.url == "" && (
        <div className="card error">
          <span className="result-text errortext">Oh no!</span>
          <span>
            An unexpected error has occured during the shortening process.
            Please try again.
          </span>
        </div>
      )}
    </>
  );
}

export default UrlContainer;
