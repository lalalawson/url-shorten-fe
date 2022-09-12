import React, { useState } from "react";
import "./UrlInput.css";

function UrlInput() {
  const [longUrl, setLongUrl] = useState("");

  return (
    <div>
      <form>
        <div className="col" style={{ padding: "24px", gap: "8px" }}>
          <label htmlFor="url">Shorten your URL:</label>
          <div className="row" style={{ gap: "8px" }}>
            <input
              id="url"
              type="text"
              placeholder="Paste your long url here!"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              style={{ width: "70%" }}
            />
            <button style={{ width: "30%" }}>Shorten</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UrlInput;
