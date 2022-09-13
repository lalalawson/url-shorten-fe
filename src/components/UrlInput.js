import axios from "axios";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import UrlContainer from "./UrlContainer";
import "./UrlInput.css";
import { API_URL } from "../constants/global";

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
    if (longUrl === "") {
      setError(true);
      setErrorMessage("Please fill in your URL first!");
      return;
    }

    // check if URL is valid
    if (isValidUrl(longUrl)) {
      setError(false);
      setErrorMessage("");
      setIsLoading(true);

      await axios
        .post(`${API_URL}/shorten`, { longUrl: longUrl })
        .then((res) => {
          setIsLoading(false);
          setIsCompleted(true);
          var currentHost = window.location.origin;
          console.log(currentHost);
          setShortUrl(currentHost + "/" + res.data.shortUrl);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            setError(true);
            setErrorMessage(error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            setError(true);
            setErrorMessage(error.request.data);
          }
          setIsLoading(false);
          setIsCompleted(true);
        });
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
    if (e.target.value === null || e.target.value === "") {
      setError(false);
      setErrorMessage("");
    }
    setLongUrl(e.target.value);
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
