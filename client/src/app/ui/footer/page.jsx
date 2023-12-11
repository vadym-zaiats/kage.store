import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles["footer"]}`}>
      <div className={`${styles["footer__grid"]}`}>
        <div>
          <p className={`${styles["footer__title"]}`}>каталог</p>
          <ul className={`${styles["footer__list"]}`}>
            <li className={`${styles["footer__item"]}`}>Футболки</li>
            <li className={`${styles["footer__item"]}`}>Худі</li>
            <li className={`${styles["footer__item"]}`}>Шкарпетки</li>
            <li className={`${styles["footer__item"]}`}>Подушки</li>
          </ul>
        </div>
        <div>
          <p className={`${styles["footer__title"]}`}>сторінки</p>
          <ul className={`${styles["footer__list"]}`}>
            <li className={`${styles["footer__item"]}`}>Новини</li>
            <li className={`${styles["footer__item"]}`}>
              Як зробити замовлення
            </li>
            <li className={`${styles["footer__item"]}`}>Доставка та оплата</li>
            <li className={`${styles["footer__item"]}`}>
              Обмін так повернення
            </li>
            <li className={`${styles["footer__item"]}`}>Гарантії</li>
            <li className={`${styles["footer__item"]}`}>Де моє замовлення</li>
            <li className={`${styles["footer__item"]}`}>
              Договір піблічнох оферти
            </li>
            <li className={`${styles["footer__item"]}`}>Розмірна сітка</li>
            <li className={`${styles["footer__item"]}`}>Контакти</li>
            <li className={`${styles["footer__item"]}`}>
              Згода на обробку персональних даних
            </li>
          </ul>
        </div>
        <div>
          <p className={`${styles["footer__title"]}`}>Співробітництво</p>
          <ul className={`${styles["footer__list"]}`}>
            <li className={`${styles["footer__item"]}`}>Оптовим клієнтам</li>
            <li className={`${styles["footer__item"]}`}>Дропшипінг</li>
            <li className={`${styles["footer__item"]}`}>Дизайнерам</li>
            <li className={`${styles["footer__item"]}`}>Наші ціни</li>
          </ul>
        </div>
        <div>
          <p className={`${styles["footer__title"]}`}>соц мережі</p>
          <ul>
            <li className={`${styles["footer__item"]}`}>
              <a href="https://www.facebook.com/mfest.com.ua">facebook</a>
            </li>
            <li className={`${styles["footer__item"]}`}>
              <a href="https://www.instagram.com/mfest_com_ua/">insta</a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <p className={`${styles["footer__title"]}`}>партнери</p>
          <ul>
            <li className={`${styles["footer__item"]}`}>visa</li>
            <li className={`${styles["footer__item"]}`}>master</li>
          </ul>
        </div>
      </div>
      <p className={`${styles["footer__last"]}`}>
        &#xa9; 2024 Kage Store. Усі права захищено
      </p>
    </footer>
  );
}
