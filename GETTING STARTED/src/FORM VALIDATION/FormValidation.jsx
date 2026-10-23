import { useState } from "react";
import "./FormValidation.css";

const initialFormData = {
  studentName: "",
  email: "",
  grade: "",
  subjects: [],
};

const subjectOptions = ["Mathematics", "Science", "English"];

function validateForm(formData) {
  const errors = {};

  if (!formData.studentName.trim()) {
    errors.studentName = "Please enter your name.";
  } else if (formData.studentName.trim().length < 2) {
    errors.studentName = "Name must be at least 2 characters.";
  } else if (!/^[\p{L} ]+$/u.test(formData.studentName.trim())) {
    errors.studentName = "Use letters and spaces only.";
  }

  if (!formData.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.grade) {
    errors.grade = "Please select your grade level.";
  }

  if (formData.subjects.length === 0) {
    errors.subjects = "Select at least one subject.";
  }

  return errors;
}

export function FormValidation() {
  const [formData, setFormData] = useState(initialFormData);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const errors = validateForm(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => {
      if (type === "checkbox") {
        const subjects = checked
          ? [...currentData.subjects, value]
          : currentData.subjects.filter((subject) => subject !== value);

        return { ...currentData, subjects };
      }

      return { ...currentData, [name]: value };
    });

    setTouched((currentTouched) => ({ ...currentTouched, [name]: true }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    const submittedData = { ...formData, subjects: [...formData.subjects] };
    console.log("Student form submitted:", submittedData);
    window.alert(
      `Form submitted successfully!\n\nStudent Name: ${submittedData.studentName}\nEmail: ${submittedData.email}\nGrade Level: Grade ${submittedData.grade}\nSubject Interests: ${submittedData.subjects.join(", ")}`,
    );
  }

  function errorFor(field) {
    return (submitted || touched[field]) && errors[field] ? errors[field] : "";
  }

  return (
    <main className="student-form-page">
      <section
        className="student-form-card"
        aria-labelledby="student-form-title"
      >
        <p className="student-form-eyebrow">Student information</p>
        <h1 id="student-form-title">Tell us about yourself</h1>
        <p className="student-form-intro">
          Share a few details and the subjects you are interested in.
        </p>

        <form className="student-form" noValidate onSubmit={handleSubmit}>
          <div className="student-form-field">
            <label htmlFor="student-name">Student Name</label>
            <input
              aria-describedby={
                errorFor("studentName") ? "student-name-error" : undefined
              }
              aria-invalid={Boolean(errorFor("studentName"))}
              autoComplete="name"
              id="student-name"
              name="studentName"
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
              type="text"
              value={formData.studentName}
            />
            {errorFor("studentName") && (
              <p
                className="student-form-error"
                id="student-name-error"
                role="alert"
              >
                {errorFor("studentName")}
              </p>
            )}
          </div>

          <div className="student-form-field">
            <label htmlFor="student-email">Email Address</label>
            <input
              aria-describedby={
                errorFor("email") ? "student-email-error" : undefined
              }
              aria-invalid={Boolean(errorFor("email"))}
              autoComplete="email"
              id="student-email"
              name="email"
              onChange={handleChange}
              placeholder="you@example.com"
              type="email"
              value={formData.email}
            />
            {errorFor("email") && (
              <p
                className="student-form-error"
                id="student-email-error"
                role="alert"
              >
                {errorFor("email")}
              </p>
            )}
          </div>

          <div className="student-form-field">
            <label htmlFor="student-grade">Grade Level</label>
            <select
              aria-describedby={
                errorFor("grade") ? "student-grade-error" : undefined
              }
              aria-invalid={Boolean(errorFor("grade"))}
              id="student-grade"
              name="grade"
              onChange={handleChange}
              value={formData.grade}
            >
              <option value="">Choose your grade</option>
              {[9, 10, 11, 12].map((grade) => (
                <option key={grade} value={grade}>
                  Grade {grade}
                </option>
              ))}
            </select>
            {errorFor("grade") && (
              <p
                className="student-form-error"
                id="student-grade-error"
                role="alert"
              >
                {errorFor("grade")}
              </p>
            )}
          </div>

          <fieldset
            aria-describedby={
              errorFor("subjects") ? "student-subjects-error" : undefined
            }
            className="student-subjects-field"
          >
            <legend>Subject Interests</legend>
            <p className="student-subjects-hint">Select all that apply.</p>
            <div className="student-subject-options">
              {subjectOptions.map((subject) => (
                <label className="student-subject-option" key={subject}>
                  <input
                    checked={formData.subjects.includes(subject)}
                    name="subjects"
                    onChange={handleChange}
                    type="checkbox"
                    value={subject}
                  />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
            {errorFor("subjects") && (
              <p
                className="student-form-error"
                id="student-subjects-error"
                role="alert"
              >
                {errorFor("subjects")}
              </p>
            )}
          </fieldset>

          <button className="student-form-submit" type="submit">
            Submit form
          </button>
        </form>
      </section>
    </main>
  );
}
