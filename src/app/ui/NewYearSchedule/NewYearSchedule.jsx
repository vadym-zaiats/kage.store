import Link from "next/link";
import styles from "./newYearSchedule.module.scss";
import Image from "next/image";

export function NewYearSchedule() {
  return (
    <div className={styles.news__item}>
      <Image
        className={styles.news__img}
        src="/imgs/news-img.jpeg"
        width={300}
        height={160}
        alt="news-img"
        priority
      />
      <div className={styles.news__content}>
        <h4 className={styles.news__title}>ДОРОГІ ДРУЗІ</h4>
        <p className={styles.news__text}>
          Наш графік роботи у святкові та вихідні дні.
        </p>
        <p className={styles.news__text}>
          30 грудня (п'ятниця) – у короткому графіку з 10 до 14 годин
        </p>
        <p className={styles.news__text}>31 грудня (субота) – вихідний</p>
        <p className={styles.news__text}>1 січня (неділя) – вихідний</p>
        <p className={styles.news__text}>
          2 січня (понеділок) – у короткому графіку з 9 до 16 годин
        </p>
        <p className={styles.news__text}>
          6 січня (п'ятниця) – у короткому графіку з 10 до 14 годин
        </p>
        <p className={styles.news__text}>7 січня (субота) – вихідний</p>
        <p className={styles.news__text}>Слава Україні!!!</p>
        <p className={styles.news__text}>
          З любов'ю та повагою, колектив майстерні улюблених футболок kage.store
        </p>
        <p className={styles.news__text}>
          Гарних вам вихідних. Ваші замовлення до нас приходять, передзвонимо
          Вам одразу ж у робочий час.
        </p>
      </div>
    </div>
  );
}
