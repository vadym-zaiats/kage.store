import styles from "./instagram.module.scss";
import Image from "next/image";

export function Instagram() {
  return (
    <section className={styles["about-instagram"]}>
      <h2 className={styles["about-instagram__title"]}>
        Стеж за новинками і акціями в Instagram
      </h2>
      <div className={styles["about-instagram__gallery"]}></div>
      <button className={styles["about-instagram__button"]}>
        <a
          className={styles["about-instagram__link"]}
          target="_blank"
          href="https://www.instagram.com/kage_store_ua/"
        >
          kage.store
        </a>
      </button>
    </section>
  );
}
