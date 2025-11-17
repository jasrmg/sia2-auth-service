import { ReactNode } from "react";
import Logo from "../../assets/Logo";
import DarkModeToggle from "../UI/DarkModeToggle";
import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.container}>
      <DarkModeToggle />

      {/* Left Side - Logo */}
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
          <h1 className={styles.brandName}>ROBUST</h1>
          <p className={styles.tagline}>Secure Authentication System</p>
        </div>

        {/* Floating Particles */}
        <div className={styles.particles}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>
      </div>

      {/* Right Side - Forms */}
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
