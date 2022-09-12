import React, { useState } from "react";

function UrlInput() {
  const [longUrl, setLongUrl] = useState(null);

  return (
    <div>
      <form>
        <div className="col" style={{ padding: "36px", gap: "8px" }}>
          <label htmlFor="url">Shorten your URL:</label>
          <div className="row">
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
