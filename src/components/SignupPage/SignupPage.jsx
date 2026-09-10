import { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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

    alert("Sign up successful!");
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <label>Email</label>

        <input
          className={
            email && emailIsValid
              ? "input-valid"
              : email
              ? "input-error"
              : "signup-input"
          }
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {email && emailIsValid && (
          <p className="valid-message">Your email is valid</p>
        )}

        {email && !emailIsValid && (
          <p className="error-message">Your email is not valid</p>
        )}

        {/* Password */}
        <label>Password</label>

        <input
          className={
            password && password.length < 6
              ? "input-error"
              : password
              ? "input-valid"
              : "signup-input"
          }
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {password && password.length < 6 && (
          <p className="error-message">Your password is too weak</p>
        )}

        {password && password.length >= 6 && (
          <p className="valid-message">Your password is strong</p>
        )}

        {/* Confirm Password */}
        <label>Confirm Password</label>

        <input
          className={
            confirmPassword && password === confirmPassword
              ? "input-valid"
              : confirmPassword
              ? "input-error"
              : "signup-input"
          }
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {confirmPassword && password === confirmPassword && (
          <p className="valid-message">Passwords match</p>
        )}

        {confirmPassword && password !== confirmPassword && (
          <p className="error-message">Passwords do not match</p>
        )}

        {/* Nationality */}
        <label>Nationality</label>

        <select
          className="signup-input"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        >
          <option value="">Select nationality</option>
          <option value="fi">Finnish</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        <button type="submit">Sign up</button>
      </form>

      {/* Results */}
      {nationality && (
        <p className="result-message">
          {messages[nationality]}
        </p>
      )}

      {email && (
        <p className="result-message">
          Your email address is: {email}
        </p>
      )}

      {email && emailIsValid && (
        <p className="result-message">
          Your email address is correct
        </p>
      )}
    </div>
  );
}

export default SignupPage;