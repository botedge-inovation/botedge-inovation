import React, { useReducer } from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const handleNavigate = (page) => {
    router.push(page);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__title}>
          <h1>BotEdge Inovations</h1>
        </div>
        <div className={styles.navbar__navbarList}>
          <ul>
            <li onClick={() => handleNavigate("/")}>Home</li>
            <li onClick={() => handleNavigate("/services")}>Services</li>
            <li onClick={() => handleNavigate("/classes")}>Classes</li>
            <li onClick={() => handleNavigate("projects")}>Projects</li>
            <li onClick={() => handleNavigate("/aboutus")}>About Us</li>
          </ul>
        </div>
        <div className={styles.navbar__buttonContainer}>
          <button className={styles.navbar__buttonContainer__loginButon}>
            Login / Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
