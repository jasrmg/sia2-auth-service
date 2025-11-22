import { usePageTitle } from "../hooks/usePageTitle";
import styles from "./Home.module.css";

const Home = () => {
  usePageTitle("Home");

  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
