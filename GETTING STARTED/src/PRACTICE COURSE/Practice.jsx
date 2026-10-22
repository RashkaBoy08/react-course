import { useState } from "react";
import "./Practice.css";

const initialFormData = {
  username: "",
  email: "",
  password: "",
  course: "",
  updates: false,
};

export const Practice = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData({ ...formData });
  }

  return (
    <main className="practice-page">
      <section className="form-card" aria-labelledby="form-title">
        <p className="form-eyebrow">React practice</p>
        <h1 id="form-title">Create your profile</h1>
        <p className="form-intro">
          Fill in the details below to see how controlled form inputs work.
        </p>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              autoComplete="username"
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="e.g. alexmorgan"
              required
              type="text"
              value={formData.username}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              autoComplete="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="you@example.com"
              required
              type="email"
              value={formData.email}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              autoComplete="new-password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter a password"
              required
              type="password"
              value={formData.password}
            />
          </div>

          <div className="form-field">
            <label htmlFor="course">Choose a course</label>
            <select
              id="course"
              name="course"
              onChange={handleChange}
              required
              value={formData.course}
            >
              <option disabled value="">
                Select a course
              </option>
              <option value="React Fundamentals">React Fundamentals</option>
              <option value="JavaScript Essentials">JavaScript Essentials</option>
              <option value="Web Design">Web Design</option>
            </select>
          </div>

          <label className="checkbox-field" htmlFor="updates">
            <input
              checked={formData.updates}
              id="updates"
              name="updates"
              onChange={handleChange}
              type="checkbox"
            />
            <span>Send me course updates</span>
          </label>

          <button className="submit-button" type="submit">
            Submit profile
          </button>
        </form>

        {submittedData && (
          <section
            aria-live="polite"
            className="submitted-card"
            aria-labelledby="submitted-title"
          >
            <h2 id="submitted-title">Submitted details</h2>
            <dl>
              <div>
                <dt>Username</dt>
                <dd>{submittedData.username}</dd>
              </div>
              <div>
                <dt>Email address</dt>
                <dd>{submittedData.email}</dd>
              </div>
              <div>
                <dt>Password</dt>
                <dd>{submittedData.password}</dd>
              </div>
              <div>
                <dt>Course</dt>
                <dd>{submittedData.course}</dd>
              </div>
              <div>
                <dt>Course updates</dt>
                <dd>{submittedData.updates ? "Yes" : "No"}</dd>
              </div>
            </dl>
          </section>
        )}
      </section>
    </main>
  );
};
