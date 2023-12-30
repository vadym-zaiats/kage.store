import styles from "./delivery.module.scss";

export function Delivery() {
  return (
    <div className={styles.delivery}>
      <h3 className={styles.delivery__title}>ДОСТАВКА</h3>
      <ul className={styles.delivery__types}>
        <li
          className={`${styles["delivery__type"]} ${styles["delivery__type--new-post"]}`}
        >
          Нова Пошта
        </li>
        <li
          className={`${styles["delivery__type"]} ${styles["delivery__type--new-post-delivery"]}`}
        >
          Адресна доставка Новою поштою
        </li>
        <li
          className={`${styles["delivery__type"]} ${styles["delivery__type--ukr-post"]}`}
        >
          Укрпошта
        </li>
      </ul>
    </div>
  );
}
