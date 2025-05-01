// components/FloatingButtons.tsx
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import styles from "./Floatingicon.module.scss";

const FloatingButtons = () => {
  return (
    <div className={styles.floatingButtons}>
      <a
        href="https://wa.me/9529366493"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        <FaWhatsapp size={24} />
      </a>
      <a href="tel:9529366493" className={styles.contact}>
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
