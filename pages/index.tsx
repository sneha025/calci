import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Calculator from "./calculator";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Calculator />
    </div>
  );
};

export default Home;
