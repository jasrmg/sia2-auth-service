import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "../components/UI/DarkModeToggle";
import styles from "./Home.module.css";
import { usePageTitle } from "../hooks/usePageTitle";

const Home = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  usePageTitle("Home");

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <DarkModeToggle />

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.welcomeSection}>
            <h1 className={styles.title}>Welcome to ROBUST!</h1>
            <p className={styles.subtitle}>You've successfully logged in</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              {currentUser?.displayName?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className={styles.details}>
              <h2 className={styles.name}>{currentUser?.displayName}</h2>
              <p className={styles.email}>{currentUser?.email}</p>

              <div className={styles.badge}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22 4 12 14.01 9 11.01"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Email Verified
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.statInfo}>
                <p className={styles.statLabel}>Security Status</p>
                <p className={styles.statValue}>Protected</p>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                    strokeWidth="2"
                  />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
                </svg>
              </div>
              <div className={styles.statInfo}>
                <p className={styles.statLabel}>Account Type</p>
                <p className={styles.statValue}>Secure</p>
              </div>
            </div>
          </div>

          <button className={styles.logoutButton} onClick={handleLogout}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="16 17 21 12 16 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="21"
                y1="12"
                x2="9"
                y2="12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Logout
          </button>
        </div>

        <div className={styles.features}>
          <h3 className={styles.featuresTitle}>System Features</h3>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22 4 12 14.01 9 11.01"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Email Verification</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                    strokeWidth="2"
                  />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="2" />
                </svg>
              </span>
              <span>Strong Password Protection</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Login Attempt Limiting</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polygon
                    points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Real-time Authentication</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
