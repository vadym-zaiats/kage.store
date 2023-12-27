import styles from "./footer.module.scss";
import Image from "next/image";
import { Info } from "./info/Info";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <Image
          src="/imgs/logo.jpg"
          width={70}
          height={70}
          alt="logo"
          priority
        />
        <p className={`${styles["footer__logo--title"]}`}>KAGE STORE</p>
      </div>
      <ul className={styles.footer__items}>
        <li>
          <ul>
            <li className={styles.footer__contacts}>
              <h3 className={styles.footer__title}>Зв'язатися з нами:</h3>
              <ul>
                <li>
                  <a
                    className={styles.footer__link}
                    href="tel:+380677777777"
                    target="_blank"
                  >
                    <span>
                      <Image
                        src="/imgs/telephone.png"
                        width={25}
                        height={25}
                        alt="phone"
                        priority
                      />
                    </span>
                    <span>+38 067 777 77 77</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer__link}
                    href="mailto:sales@gmail.com"
                    target="_blank"
                  >
                    <span>
                      <Image
                        src="/imgs/mail.png"
                        width={25}
                        height={25}
                        alt="email"
                        priority
                      />
                    </span>
                    <span>sales@gmail.com</span>
                  </a>
                </li>
                <li>
                  <p className={styles.footer__link}>
                    <span>
                      <Image
                        src="/imgs/location.png"
                        width={25}
                        height={25}
                        alt="location"
                        priority
                      />
                    </span>
                    <span>
                      <span>Київ,</span> Різницька 11-Б (м. Печерська, м.
                      Арсенальна)
                    </span>
                  </p>
                </li>
              </ul>
            </li>
            <li className={styles.footer__contacts}>
              <h3 className={styles.footer__title}>
                Ми на зв'язку у месенджерах:
              </h3>
              <ul>
                <li>
                  <p>
                    <a
                      className={styles.footer__link}
                      href="https://t.me/hello_baddy"
                      target="_blank"
                    >
                      <Image
                        src="/imgs/telegram.png"
                        width={25}
                        height={25}
                        alt="telegram"
                      />
                      @kage-store
                    </a>
                  </p>
                </li>
                <li>
                  <a
                    className={styles.footer__link}
                    href="viber://chat?number=%2B380958978473"
                    target="_blank"
                  >
                    <Image
                      src="/imgs/viber.png"
                      width={25}
                      height={25}
                      alt="viber"
                    />
                    380677777777
                  </a>
                  <p></p>
                </li>
              </ul>
            </li>
            <li className={styles.footer__contacts}>
              <h3 className={styles.footer__title}>Стеж за нами:</h3>
              <ul className={`${styles["footer__socials-list"]}`}>
                <li>
                  <a href="https://www.tiktok.com/" target="_blank">
                    <Image
                      src="/imgs/tik-tok.png"
                      width={25}
                      height={25}
                      alt="tik-tok"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/imgs/instagram.png"
                      width={25}
                      height={25}
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <Image
                      src="/imgs/facebook.png"
                      width={25}
                      height={25}
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank">
                    <Image
                      src="/imgs/youtube.png"
                      width={25}
                      height={25}
                      alt="youtube"
                    />
                  </a>
                </li>
              </ul>
            </li>
            <Info />
            <li>
              <h3 className={styles.footer__title}>Партнери</h3>
              <Image
                className={`${styles["footer__title-arrow"]}`}
                src="/imgs/arrow.svg"
                width={15}
                height={15}
                alt="master-card"
                priority
              />
              <ul className={styles.footer__payment}>
                <li>
                  <Image
                    src="/imgs/master-card.png"
                    width={35}
                    height={35}
                    alt="master-card"
                    priority
                  />
                </li>
                <li>
                  <Image
                    src="/imgs/visa.png"
                    width={35}
                    height={35}
                    alt="visa"
                    priority
                  />
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p className={styles.footer__rights}>
        &#xa9; 2024 Kage Store. Усі права захищено
      </p>
    </footer>
  );
}
