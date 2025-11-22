import { useState, type FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import styles from "./LoginForm.module.css";

import { usePageTitle } from "../../hooks/usePageTitle";

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

const LoginForm = ({ onSwitchToSignup }: LoginFormProps) => {
  usePageTitle("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check login attempts
    const attempts = localStorage.getItem(`login_attempts_${email}`);
    const attemptsCount = attempts ? parseInt(attempts) : 0;
    const lastAttemptTime = localStorage.getItem(`last_attempt_${email}`);

    // Check if locked out (3 attempts within 15 minutes)
    if (attemptsCount >= 3 && lastAttemptTime) {
      const timeElapsed = Date.now() - parseInt(lastAttemptTime);
      const fifteenMinutes = 15 * 60 * 1000;

      if (timeElapsed < fifteenMinutes) {
        const remainingTime = Math.ceil((fifteenMinutes - timeElapsed) / 60000);
        setError(
          `Too many failed attempts. Try again in ${remainingTime} minute(s).`
        );
        return;
      } else {
        // Reset attempts after 15 minutes
        localStorage.removeItem(`login_attempts_${email}`);
        localStorage.removeItem(`last_attempt_${email}`);
      }
    }

    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      // Clear attempts on successful login
      localStorage.removeItem(`login_attempts_${email}`);
      localStorage.removeItem(`last_attempt_${email}`);
    } catch (error: unknown) {
      const err = error as { code: string };
      // Increment failed attempts
      const newAttempts = attemptsCount + 1;
      localStorage.setItem(`login_attempts_${email}`, newAttempts.toString());
      localStorage.setItem(`last_attempt_${email}`, Date.now().toString());

      const remainingAttempts = 3 - newAttempts;

      if (err.code === "auth/invalid-credential") {
        setError(
          remainingAttempts > 0
            ? `Invalid email or password. ${remainingAttempts} attempt(s) remaining.`
            : "Too many failed attempts. Account locked for 15 minutes."
        );
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed login attempts. Please try again later.");
      } else {
        setError("Failed to login. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>Sign in to your account to continue</p>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.activeTab}`}>Login</button>
        <button className={styles.tab} onClick={onSwitchToSignup}>
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {error && (
          <div className={styles.error}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M10 6V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="10" cy="13.5" r="1" fill="currentColor" />
            </svg>
            {error}
          </div>
        )}

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className={styles.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                // Eye Off Icon
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="1"
                    y1="1"
                    x2="23"
                    y2="23"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                // Eye Icon
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? <span className={styles.loader}></span> : "Login"}
        </button>
      </form>

      <p className={styles.footer}>
        Don't have an account?{" "}
        <button className={styles.link} onClick={onSwitchToSignup}>
          Sign up now
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
