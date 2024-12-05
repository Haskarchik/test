import styles from "./card.module.css";

const Card = ({ title, description, index }) => {
  const formattedIndex = (index + 1).toString().padStart(2, "0");

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.blockNumber}>
        <span className={`${styles.number} ${index === 0 ? styles.first : ""}`}>
          {formattedIndex}
        </span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.blockContent}>
        <div className={styles.contentInner}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
