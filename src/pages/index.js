import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.homesection1}>
        <img src="homeimg2.png" className={styles.homesection1__img1} />
        <div className={styles.homesection1__overlay}>
          <h1>Empowering Students to Turn Ideas Into Reality.</h1>
          <h3>
            We guide students in transforming their innovative ideas into real,
            successful projects—offering unwavering support every step of the
            way.
          </h3>
          <h3>
            We provide expert mentorship, resources, and a collaborative
            environment to ensure each project reaches its full potential.
          </h3>
        </div>
      </div>

      <h2 className={styles.section2heading}>Projects You build in.</h2>
      <div className={styles.homesection2}>
        <div className={styles.homesection2__content}>IOT Projects</div>
        <div className={styles.homesection2__content}>Machine learning</div>
        <div className={styles.homesection2__content}>Web Development</div>
        <div className={styles.homesection2__content}>Mobile APP</div>
        <div className={styles.homesection2__content}>Embeded System</div>
        <div className={styles.homesection2__content}>
          Research Paper Publishing
        </div>
      </div>

      <div className={styles.homesection3}>
        <h1>What we do?</h1>
        <h3>
          We help students bring their project ideas to life—turning concepts
          into fully functional solutions. Whether it's in Computer Science,
          Electronics, or Electrical Engineering, we offer:
        </h3>
        <ul>
          <li>Project Ideation & Planning</li>
          <ul>
            <li>
              We assist in shaping raw ideas into practical, achievable
              projects.
            </li>
          </ul>
          <li>Expert Mentorship</li>
          <ul>
            <li>
              Get guidance from professionals with real-world experience in your
              domain.
            </li>
          </ul>
          <li>Hands-On Development Support</li>
          <ul>
            <li>
              From circuit design to coding, we walk with you through every
              technical challenge.
            </li>
          </ul>
          <li>Prototype to Presentation</li>
          <ul>
            <li>
              Build, test, and polish your project for academic submissions or
              competitions.
            </li>
          </ul>
          <li> Collaborative Environment</li>
          <ul>
            <li>
              Work with a team that values creativity, learning, and innovation.
            </li>
          </ul>
        </ul>
        <h2>
          We empower students not just to complete projects, but to excel at
          them.
        </h2>
      </div>

      <h1>Student review section</h1>
    </>
  );
}
