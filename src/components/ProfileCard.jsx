import styles from "../css/ProfileCard.module.css";

function ProfileCard() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.avatar}>MZ</div>

        <h1 className={styles.name}>Muhammad Zohaib</h1>

        <p className={styles.role}>ReactJS Student</p>

        <p className={styles.description}>
          Currently learning React, Components and CSS.
          Building my skills one project at a time.
        </p>

        <button className={styles.button}>Follow Me</button>
      </div>
    </div>
  );
}

export default ProfileCard;