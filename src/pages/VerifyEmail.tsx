import { usePageTitle } from "../hooks/usePageTitle";
import styles from "./VerifyEmail.module.css";

const VerifyEmail = () => {
  usePageTitle("Verify Email");

  return (
    <div className={styles.container}>
      <h1>Verify Email</h1>
    </div>
  );
};

export default VerifyEmail;
