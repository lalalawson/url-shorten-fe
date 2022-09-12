import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import UrlContainer from "./UrlContainer";
import "./UrlInput.css";

function UrlInput() {
  const [longUrl, setLongUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // reset
    setIsCompleted(false);

    // check if field is empty
    if (longUrl == "") {
      setError(true);
      setErrorMessage("Please fill in your URL first!");
      return;
    }

    // check if URL is valid
    if (isValidUrl(longUrl)) {
      setError(false);
      setErrorMessage("");
      setIsLoading(true);

      // placeholder for api
      await timeout(1000);
      setIsLoading(false);
      setIsCompleted(true);
      setShortUrl("https://haha.com");
    } else {
      setError(true);
      setErrorMessage(
        "Please make sure your URL is valid! Urls should start with http:// or https://"
      );
    }
  };

  // check if URL is valid before posting
  function isValidUrl(url) {
    try {
      return Boolean(new URL(url));
    } catch (e) {
      return false;
    }
  }

  // remove errors if user deletes everything
  function handleChange(e) {
    if (e.target.value == null || e.target.value == "") {
      setError(false);
      setErrorMessage("");
    }
    setLongUrl(e.target.value);
  }

  // temp
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col" style={{ padding: "24px", gap: "8px" }}>
          <label htmlFor="url">Shorten your URL:</label>
          <div className="row" style={{ gap: "8px" }}>
            <input
              id="url"
              className={error ? "error" : null}
              type="text"
              placeholder="Paste your long url here!"
              value={longUrl}
              onChange={handleChange}
              style={{ width: "70%" }}
            />
            <button type="submit" disabled={isLoading} style={{ width: "30%" }}>
              Shorten
            </button>
          </div>
          {/* render only when there is an error */}
          {error && <span className="errorMessage">{errorMessage}</span>}
          {/* render only when loading */}
          {isLoading && (
            <div style={{ marginTop: "36px" }}>
              <LoadingSpinner />
            </div>
          )}
          {isCompleted && <UrlContainer url={shortUrl} />}
        </div>
      </form>
    </div>
  );
}

export default UrlInput;
