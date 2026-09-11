import { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = email.includes("@") && email.includes(".");

  const messages = {
    fi: "Moi",
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailIsValid) {
      alert("Please enter a valid email");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Signup successful!");

    setSubmitted(true);
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <label>Email</label>

        <input
          className="signup-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        {email && emailIsValid && (
          <p className="valid-message">Your email is valid</p>
        )}

        {email && !emailIsValid && (
          <p className="error-message">Your email is not valid</p>
        )}

        <label>Password</label>

        <input
          className="signup-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        <label>Confirm Password</label>

        <input
          className="signup-input"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        {confirmPassword && password === confirmPassword && (
          <p className="valid-message">Passwords match</p>
        )}

        {confirmPassword && password !== confirmPassword && (
          <p className="error-message">Passwords do not match</p>
        )}

        <label>Nationality</label>

        <select
          className="signup-input"
          value={nationality}
          onChange={(e) => {
            setNationality(e.target.value);
            setSubmitted(false);
          }}
          required
        >
          <option value="">Select nationality</option>
          <option value="fi">Finnish</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>

      {submitted && (
        <div className="result">
          <p>{messages[nationality]}</p>

          <p>Your email address is: {email}</p>

          <p>Your email address is correct</p>
        </div>
      )}
    </div>
  );
}

export default SignupPage;