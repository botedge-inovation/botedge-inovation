import React from "react";
import styles from "./Review.module.scss";
const Review = ({ name, stars, text }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__section1}>
          <div className={styles.card__section1__profile}>
            <img src="myprofile.png" alt="myImage" />
          </div>
          <div className={styles.card__section1__nameReview}>
            <div className={styles.card__section1__nameReview__name}>
              {name}
            </div>
            <div className={styles.card__section1__nameReview__review}>
              {"⭐".repeat(5)}
            </div>
          </div>
        </div>
        <div className={styles.card__section2}>{text}</div>
      </div>
    </>
  );
};

export default Review;
