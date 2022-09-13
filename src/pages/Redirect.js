import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { API_URL } from "../constants/global";

function Redirect() {
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    redirectUser(params.shortId);
  }, [params]);

  function redirectUser(shortId) {
    axios
      .get(`${API_URL}/redirect/${shortId}`)
      .then((res) => {
        setIsLoading(false);
        window.location.replace(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        }
        setError(true);
        setIsLoading(false);
      });
  }

  return (
    <div className="center-screen">
      {isLoading && <LoadingSpinner />}
      {error && (
        <div className="card error" style={{ margin: "36px" }}>
          <span className="result-text errortext">Oops!</span>
          <span>The link doesn't seem to exist...</span>
          <a href="/">Feel free to shorten any link again here.</a>
        </div>
      )}
    </div>
  );
}

export default Redirect;
