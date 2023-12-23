"use client";

import styles from "../footer/footer.module.scss";
import Image from "next/image";
import { useState } from "react";

export function Info() {
  const [pagesIsOpen, setPagesIsOpen] = useState(false);
  const [catalogIsOpen, setCatalogIsOpen] = useState(false);
  const [cooperationIsOpen, setCooperationIsOpen] = useState(false);
  return (
    <>
      <li
        className={`${styles["footer__pages"]} ${
          pagesIsOpen && styles["footer__pages--open"]
        }`}
      >
        <h3 className={`${styles["footer__title"]}`}>Cторінки</h3>
        <Image
          onClick={() => {
            setPagesIsOpen(!pagesIsOpen);
          }}
          className={`${styles["footer__title-arrow"]} ${
            pagesIsOpen && styles["rotate-90"]
          }`}
          src="/imgs/arrow.svg"
          width={15}
          height={15}
          alt="master-card"
        />
        <ul>
          <li className={`${styles["footer__link"]}`}>Новини</li>
          <li className={`${styles["footer__link"]}`}>Як зробити замовлення</li>
          <li className={`${styles["footer__link"]}`}>Доставка та оплата</li>
          <li className={`${styles["footer__link"]}`}>Обмін так повернення</li>
          <li className={`${styles["footer__link"]}`}>Гарантії</li>
          <li className={`${styles["footer__link"]}`}>Де моє замовлення</li>
          <li className={`${styles["footer__link"]}`}>
            Договір піблічнох оферти
          </li>
          <li className={`${styles["footer__link"]}`}>Розмірна сітка</li>
          <li className={`${styles["footer__link"]}`}>Контакти</li>
          <li className={`${styles["footer__link"]}`}>
            Згода на обробку персональних даних
          </li>
        </ul>
      </li>
      <li
        className={`${styles["footer__catalog"]} ${
          catalogIsOpen && styles["footer__catalog--open"]
        }`}
      >
        <h3 className={`${styles["footer__title"]}`}>Kаталог</h3>
        <Image
          onClick={() => {
            setCatalogIsOpen(!catalogIsOpen);
          }}
          className={`${styles["footer__title-arrow"]} ${
            catalogIsOpen && styles["rotate-90"]
          }`}
          src="/imgs/arrow.svg"
          width={15}
          height={15}
          alt="master-card"
        />
        <ul>
          <li className={`${styles["footer__link"]}`}>Футболки</li>
          <li className={`${styles["footer__link"]}`}>Худі</li>
          <li className={`${styles["footer__link"]}`}>Шкарпетки</li>
          <li className={`${styles["footer__link"]}`}>Подушки</li>
        </ul>
      </li>
      <li
        className={`${styles["footer__cooperation"]} ${
          cooperationIsOpen && styles["footer__cooperation--open"]
        }`}
      >
        <h3 className={`${styles["footer__title"]}`}>Співробітництво</h3>
        <Image
          onClick={() => {
            setCooperationIsOpen(!cooperationIsOpen);
          }}
          className={`${styles["footer__title-arrow"]} ${
            cooperationIsOpen && styles["rotate-90"]
          }`}
          src="/imgs/arrow.svg"
          width={15}
          height={15}
          alt="master-card"
        />
        <ul>
          <li className={`${styles["footer__link"]}`}>Оптовим клієнтам</li>
          <li className={`${styles["footer__link"]}`}>Дропшипінг</li>
          <li className={`${styles["footer__link"]}`}>Дизайнерам</li>
          <li className={`${styles["footer__link"]}`}>Наші ціни</li>
        </ul>
      </li>
      <li>
        <h3 className={`${styles["footer__title"]}`}>Партнери</h3>
        <Image
          className={`${styles["footer__title-arrow"]}`}
          src="/imgs/arrow.svg"
          width={15}
          height={15}
          alt="master-card"
        />
        <ul className={`${styles["footer__payment"]}`}>
          <li>
            <Image
              src="/imgs/master-card.png"
              width={35}
              height={35}
              alt="master-card"
            />
          </li>
          <li>
            <Image
              src="/imgs/master-card.png"
              width={35}
              height={35}
              alt="master-card"
            />
          </li>
        </ul>
      </li>
    </>
  );
}
