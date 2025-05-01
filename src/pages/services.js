import styles from "../styles/servises.module.scss";

export default function Services() {
  const services = [
    {
      title: "Computer Science Projects",
      points: [
        "Web & App Development",
        "AI/ML, IoT, Data Science",
        "Final Year Project Help",
        "Code Review & Debugging",
      ],
    },
    {
      title: "Electronics Projects",
      points: [
        "Arduino, ESP32, Raspberry Pi",
        "Sensor Integration",
        "Embedded Systems",
        "PCB Design & Simulation",
      ],
    },
    {
      title: "Electrical Projects",
      points: [
        "Power & Solar Projects",
        "PLC & Control Systems",
        "Circuit Design",
        "MATLAB & PSCAD Simulation",
      ],
    },
  ];

  return (
    <section className={styles.servicesRoadmap}>
      <h3 className={styles.servicesIntro}>
        We provide end-to-end project support for students in Computer Science,
        Electronics, and Electrical Engineering. Whether you have a rough idea
        or need a project from scratch, we’re here to help you build it,
        understand it, and present it with confidence.
      </h3>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.roadmapContainer}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.roadmapItem} ${
              index % 2 === 0 ? "" : styles.right
            }`}
          >
            <div className={styles.content}>
              <h3>{service.title}</h3>
              <ul>
                {service.points.map((p, i) => (
                  <li key={i}> {p}</li>
                ))}
              </ul>
            </div>
            <span className={styles.circle}></span>
          </div>
        ))}
      </div>
    </section>
  );
}
