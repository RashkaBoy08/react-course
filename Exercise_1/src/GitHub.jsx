import { useEffect, useState } from "react";
import "./GitHub.css";

const profileUrl = "https://api.github.com/users/RashkaBoy08";

async function fetchJson(url, signal) {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`GitHub request failed (${response.status}).`);
  }

  return response.json();
}

function getWebsiteUrl(blog) {
  if (!blog) return null;
  return /^https?:\/\//i.test(blog) ? blog : `https://${blog}`;
}

export function GitHub() {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGitHubData() {
      setLoading(true);
      setError(null);

      try {
        const user = await fetchJson(profileUrl, controller.signal);
        const repos = await fetchJson(
          `https://api.github.com/users/${encodeURIComponent(user.login)}/repos?sort=updated&per_page=4`,
          controller.signal,
        );

        setProfile(user);
        setRepositories(repos);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchGitHubData();
    return () => controller.abort();
  }, [retryCount]);

  if (loading) {
    return (
      <main className="profile-page">
        <section className="profile-card profile-card--state" aria-live="polite">
          <span className="loading-spinner" aria-hidden="true" />
          <h1 className="state-title">Loading GitHub profile</h1>
          <p className="state-copy">Fetching profile and recent repositories.</p>
        </section>
      </main>
    );
  }

  if (error || !profile) {
    return (
      <main className="profile-page">
        <section className="profile-card profile-card--state" role="alert">
          <span className="error-mark" aria-hidden="true">!</span>
          <h1 className="state-title">Could not load the profile</h1>
          <p className="state-copy">{error || "GitHub returned no profile data."}</p>
          <button
            className="retry-button"
            onClick={() => setRetryCount((count) => count + 1)}
            type="button"
          >
            Try again
          </button>
        </section>
      </main>
    );
  }

  const websiteUrl = getWebsiteUrl(profile.blog);

  return (
    <main className="profile-page">
      <article className="profile-card">
        <header className="card-topbar">
          <a className="brand" href="https://github.com" target="_blank" rel="noreferrer">
            <svg className="brand-mark" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.85 2.03 3.4 1.45.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"
              />
            </svg>
            GitHub profile
          </a>
          <span className="profile-label">
            <span className="status-dot" />
            Public profile
          </span>
        </header>

        <section className="profile-intro">
          <div className="avatar-frame">
            <img className="profile-avatar" src={profile.avatar_url} alt={`${profile.login}'s avatar`} />
          </div>
          <div className="identity">
            <p className="eyebrow">Developer profile</p>
            <h1>{profile.name || profile.login}</h1>
            <a className="username" href={profile.html_url} target="_blank" rel="noreferrer">
              @{profile.login} <span aria-hidden="true">↗</span>
            </a>
            {profile.bio && <p className="bio">{profile.bio}</p>}
          </div>
        </section>

        <section className="stats-grid" aria-label="GitHub statistics">
          <div className="stat">
            <span className="stat-value">{profile.public_repos}</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat">
            <span className="stat-value">{profile.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">{profile.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </section>

        <section className="details" aria-label="Profile details">
          {profile.location && (
            <p className="detail">
              <span className="detail-label">Location</span>
              <span className="detail-value">{profile.location}</span>
            </p>
          )}
          {profile.company && (
            <p className="detail">
              <span className="detail-label">Company</span>
              <span className="detail-value">{profile.company}</span>
            </p>
          )}
          {websiteUrl && (
            <p className="detail">
              <span className="detail-label">Website</span>
              <a className="detail-value detail-link" href={websiteUrl} target="_blank" rel="noreferrer">
                {profile.blog} <span aria-hidden="true">↗</span>
              </a>
            </p>
          )}
          <p className="detail">
            <span className="detail-label">Member since</span>
            <span className="detail-value">
              {new Date(profile.created_at).toLocaleDateString(undefined, {
                month: "long",
                year: "numeric",
              })}
            </span>
          </p>
        </section>

        <section className="repositories" aria-labelledby="repositories-title">
          <div className="repositories-heading">
            <h2 id="repositories-title">Recently updated</h2>
            <a href={`${profile.html_url}?tab=repositories`} target="_blank" rel="noreferrer">
              All repositories <span aria-hidden="true">↗</span>
            </a>
          </div>
          {repositories.length > 0 ? (
            <ul className="repository-list">
              {repositories.map((repository) => (
                <li className="repository" key={repository.id}>
                  <div className="repository-heading">
                    <a href={repository.html_url} target="_blank" rel="noreferrer">
                      {repository.name}
                    </a>
                    <span className="repository-stars" aria-label={`${repository.stargazers_count} stars`}>
                      ★ {repository.stargazers_count}
                    </span>
                  </div>
                  {repository.description && (
                    <p className="repository-description">{repository.description}</p>
                  )}
                  {repository.language && (
                    <span className="repository-language">{repository.language}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-repositories">No public repositories to show yet.</p>
          )}
        </section>

        <footer className="card-footer">
          <span>Profile data provided by GitHub</span>
          <a className="profile-button" href={profile.html_url} target="_blank" rel="noreferrer">
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </article>
    </main>
  );
}
