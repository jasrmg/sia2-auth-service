import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import styles from "./VerifyEmail.module.css";

const VerifyEmail = () => {
  const { currentUser, sendVerificationEmail, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleResendEmail = async () => {
    setLoading(true);
    setMessage("");

    try {
      await sendVerificationEmail();
      setMessage("Verification email sent! Please check your inbox.");
    } catch (error) {
      setMessage("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              strokeWidth="2"
            />
            <polyline points="22,6 12,13 2,6" strokeWidth="2" />
          </svg>
        </div>

        <h1 className={styles.title}>Verify Your Email</h1>

        <p className={styles.description}>
          We've sent a verification email to{" "}
          <strong>{currentUser?.email}</strong>
        </p>

        <p className={styles.instructions}>
          Please check your inbox and click the verification link to activate
          your account.
        </p>

        {message && <div className={styles.message}>{message}</div>}

        <div className={styles.actions}>
          <button className={styles.primaryButton} onClick={handleRefresh}>
            I've Verified My Email
          </button>

          <button
            className={styles.secondaryButton}
            onClick={handleResendEmail}
            disabled={loading}
          >
            {loading ? "Sending..." : "Resend Verification Email"}
          </button>

          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className={styles.tips}>
          <p className={styles.tipsTitle}>📧 Can't find the email?</p>
          <ul className={styles.tipsList}>
            <li>Check your spam or junk folder</li>
            <li>Make sure you entered the correct email</li>
            <li>Wait a few minutes and try resending</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
