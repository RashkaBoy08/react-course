import { useState } from "react";
import "./StudentRegistration.css";

const initialFormData = {
  name: "",
  email: "",
  grade: "",
  interests: [],
};

const subjects = ["Mathematics", "Science", "English"];

function validateField(field, value) {
  if (field === "name") {
    const name = value.trim();
    if (!name) return "Please enter the student's name.";
    if (!/^[\p{L} ]+$/u.test(name)) {
      return "Use letters and spaces only.";
    }
    if (name.length < 2) return "Name must be at least 2 characters.";
  }

  if (field === "email") {
    if (!value.trim()) return "Please enter an email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      return "Enter a valid email address.";
    }
  }

  if (field === "grade" && !value) {
    return "Please select a grade level.";
  }

  if (field === "interests" && value.length === 0) {
    return "Select at least one subject.";
  }

  return "";
}

function StudentRegistration() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function updateField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
  }

  function toggleSubject(subject) {
    const interests = formData.interests.includes(subject)
      ? formData.interests.filter((interest) => interest !== subject)
      : [...formData.interests, subject];

    updateField("interests", interests);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = Object.fromEntries(
      Object.entries(formData).map(([field, value]) => [
        field,
        validateField(field, value),
      ]),
    );
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const submission = {
        ...formData,
        interests: [...formData.interests],
        submittedAt: new Date().toISOString(),
      };

      try {
        window.localStorage.setItem(
          "student-registration",
          JSON.stringify(submission),
        );
      } catch (error) {
        console.error("Unable to save student registration data.", error);
        setSubmitError("Your registration could not be saved in this browser.");
        return;
      }

      console.log("Student registration submitted:", submission);
      window.alert(
        [
          "Student registration submitted successfully!",
          "",
          `Student: ${submission.name}`,
          `Email: ${submission.email}`,
          `Grade: ${submission.grade}`,
          `Subject interests: ${submission.interests.join(", ")}`,
        ].join("\n"),
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setFormData(initialFormData);
    setErrors({});
    setSubmitError("");
  }

  return (
    <main className="registration-page">
      <section className="registration-card" aria-labelledby="registration-title">
        <div className="registration-intro">
          <span className="registration-kicker">WELCOME TO YOUR NEXT CHAPTER</span>
          <h1 id="registration-title">Student registration</h1>
          <p>
            Tell us a little about yourself to get started. Fields marked with{" "}
            <span aria-hidden="true">*</span> are required.
          </p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="student-name">
              Student name <span aria-hidden="true">*</span>
            </label>
            <input
              autoComplete="name"
              className={errors.name ? "has-error" : ""}
              id="student-name"
              type="text"
              value={formData.name}
              placeholder="e.g. Jordan Taylor"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "student-name-error" : undefined}
              onChange={(event) => updateField("name", event.target.value)}
            />
            {errors.name && (
              <p className="field-error" id="student-name-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="student-email">
              Email address <span aria-hidden="true">*</span>
            </label>
            <input
              autoComplete="email"
              className={errors.email ? "has-error" : ""}
              id="student-email"
              type="email"
              value={formData.email}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "student-email-error" : undefined}
              onChange={(event) => updateField("email", event.target.value)}
            />
            {errors.email && (
              <p className="field-error" id="student-email-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="student-grade">
              Grade level <span aria-hidden="true">*</span>
            </label>
            <select
              className={errors.grade ? "has-error" : ""}
              id="student-grade"
              value={formData.grade}
              aria-invalid={Boolean(errors.grade)}
              aria-describedby={errors.grade ? "student-grade-error" : undefined}
              onChange={(event) => updateField("grade", event.target.value)}
            >
              <option value="">Choose your grade</option>
              {[9, 10, 11, 12].map((grade) => (
                <option key={grade} value={`Grade ${grade}`}>
                  Grade {grade}
                </option>
              ))}
            </select>
            {errors.grade && (
              <p className="field-error" id="student-grade-error" role="alert">
                {errors.grade}
              </p>
            )}
          </div>

          <fieldset
            className={`form-field subject-field${errors.interests ? " has-error" : ""}`}
            aria-describedby={
              errors.interests ? "subject-interests-error" : undefined
            }
          >
            <legend>
              Subject interests <span aria-hidden="true">*</span>
            </legend>
            <p className="field-hint">Choose one or more subjects you enjoy.</p>
            <div className="subject-options">
              {subjects.map((subject) => (
                <label className="subject-option" key={subject}>
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(subject)}
                    onChange={() => toggleSubject(subject)}
                  />
                  <span className="custom-checkbox" aria-hidden="true" />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
            {errors.interests && (
              <p
                className="field-error"
                id="subject-interests-error"
                role="alert"
              >
                {errors.interests}
              </p>
            )}
          </fieldset>

          {submitError && (
            <p className="submission-error" role="alert">
              {submitError}
            </p>
          )}

          <div className="form-actions">
            <button
              className="reset-button"
              type="button"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Reset form
            </button>
            <button
              className="submit-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner" aria-hidden="true" />
                  Submitting...
                </>
              ) : (
                "Complete registration"
              )}
            </button>
          </div>
        </form>

        <p className="registration-footnote">
          Your information will be saved securely on this device.
        </p>
      </section>
    </main>
  );
}

export default StudentRegistration;
