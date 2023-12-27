import Link from "next/link";
import styles from "./news.module.scss";
import Image from "next/image";

export function News() {
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
        <h4 className={styles.news__title}>Графік роботи на новорічні свята</h4>
        <p className={styles.news__text}>
          Дорогі друзі. Наш графік роботи у святкові та вихідні дні.
        </p>
        <Link className={styles.news__more} href="/news/full-info">
          Читати більше
        </Link>
      </div>
    </div>
  );
}
