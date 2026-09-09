import { useState } from "react";

export const SearchGithubUsers = () => {
  const [username, setUsername] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    if (!name.trim()) {
      setError("Please enter a GitHub username");
      setUsername(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      let response = await fetch(`https://api.github.com/users/${name.trim()}`);

      console.log(response.status);

      if (!response.ok) {
        throw new Error("GitHub @username not found");
      }

      const data = await response.json();

      console.log(data);

      setUsername(data);
      setName("");
    } catch (error) {
      setError(error.message);
      setUsername(null);
    } finally {
      setLoading(false);
    }
  };

  // markup
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Search GitHub User</h1>

      <input
        type="text"
        placeholder="Enter GitHub @username"
        onChange={(e) => setName(e.target.value)}
        value={name}
        style={{
          color: "#434141",
          width: "250px",
          height: "45px",
          fontSize: "20px",
          paddingInline: "10px",
        }}
      />

      <button
        type="submit"
        onClick={getUser}
        disabled={loading}
        style={{
          marginLeft: "10px",
          paddingBlock: "13px",
          paddingInline: "40px",
          fontSize: "20px",
          backgroundColor: loading ? "#888" : "#434141",
          color: "#fff",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Searching..." : "Search"}
      </button>

      {/* Loading message */}
      {loading && <p>Loading GitHub user...</p>}

      {/* Error message */}
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {error}
        </p>
      )}

      {/* Data showing here */}
      {username && (
        <div>
          <h1>{username.login}</h1>

          <img
            src={username.avatar_url}
            alt={username.login}
            style={{
              borderRadius: "50%",
              height: "200px",
              width: "200px",
            }}
          />

          {/* add more details */}
          <p>
            Location: <span>{username.location || "Not available"}</span>
          </p>

          <p>
            Public Repos: <span>{username.public_repos}</span>
          </p>

          <p>
            Followers: <span>{username.followers}</span>
          </p>

          <p>
            Following: <span>{username.following}</span>
          </p>
        </div>
      )}
    </div>
  );
};
