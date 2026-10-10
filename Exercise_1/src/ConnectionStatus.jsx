import "./App.css";
import { useOnlineStatus } from "./useOnlineStatus";

export const ConnectionStatus = () => {
  const { isOnline } = useOnlineStatus();

  return (
    <main className="connection-page">
      <section
        className={`connection-card ${isOnline ? "is-online" : "is-offline"}`}
        aria-live="polite"
      >
        <div className="connection-orbit" aria-hidden="true">
          <span className="connection-indicator" />
        </div>
        <p className="connection-eyebrow">NETWORK STATUS</p>
        <h1>{isOnline ? "You're connected." : "You're offline."}</h1>
        <p className="connection-description">
          {isOnline
            ? "Your device is online and ready to go."
            : "Check your internet connection and try again."}
        </p>
        <div className="connection-badge">
          <span className="connection-badge-dot" aria-hidden="true" />
          {isOnline ? "All systems go" : "Connection unavailable"}
        </div>
      </section>
    </main>
  );
};
