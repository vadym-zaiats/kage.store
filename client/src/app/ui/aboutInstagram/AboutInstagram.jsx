import styles from "./aboutInstagram.module.scss";
import Image from "next/image";

export function AboutInstagram() {
  return (
    <section className={styles["about-instagram"]}>
      <h2 className={styles["about-instagram__title"]}>
        Стеж за новинками і акціями в Instagram
      </h2>
      <div className={styles["about-instagram__gallery"]}>
        <div>
          <Image
            className={styles[`about-instagram__gallery-item`]}
            src="/imgs/insta/1.jpeg"
            width={160}
            height={160}
            alt="insta"
          />
        </div>
        <div>
          <Image
            className={styles[`about-instagram__gallery-item`]}
            src="/imgs/insta/2.jpeg"
            width={160}
            height={160}
            alt="insta"
          />
        </div>
        <div>
          <Image
            className={styles[`about-instagram__gallery-item`]}
            src="/imgs/insta/3.jpeg"
            width={160}
            height={160}
            alt="insta"
          />
        </div>
        <div>
          <Image
            className={styles[`about-instagram__gallery-item`]}
            src="/imgs/insta/4.jpeg"
            width={160}
            height={160}
            alt="insta"
          />
        </div>
      </div>
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
