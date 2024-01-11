"use client";

import styles from "../footer.module.scss";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function Info() {
  const [pagesIsOpen, setPagesIsOpen] = useState(false);
  const [catalogIsOpen, setCatalogIsOpen] = useState(false);
  const [cooperationIsOpen, setCooperationIsOpen] = useState(false);
  return (
    <>
      <li className={`${styles["footer__pages"]}`}>
        <h3
          className={`${styles["footer__title"]}`}
          onClick={() => {
            setPagesIsOpen(!pagesIsOpen);
          }}
        >
          Cторінки
        </h3>
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
          priority
        />
        <ul
          className={`${styles["footer__pages-items"]} ${
            pagesIsOpen && styles["footer__pages-items--open"]
          }`}
        >
          <li className={`${styles["footer__link"]}`}>
            <Link href="/news">Новини</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/order">Як зробити замовлення</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/delivery">Доставка та оплата</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/returning">Обмін так повернення</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/guarantee">Гарантії</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/my-order">Де моє замовлення</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/contract">Договір піблічнох оферти</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/dimensional-grid">Розмірна сітка</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/contacts">Контакти</Link>
          </li>
          <li className={`${styles["footer__link"]}`}>
            <Link href="/agreement">Згода на обробку персональних даних</Link>
          </li>
        </ul>
      </li>
      <li className={`${styles["footer__catalog"]}`}>
        <h3
          className={`${styles["footer__title"]}`}
          onClick={() => {
            setCatalogIsOpen(!catalogIsOpen);
          }}
        >
          Kаталог
        </h3>
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
          priority
        />
        <ul
          className={`${styles["footer__catalog-items"]} ${
            catalogIsOpen && styles["footer__catalog-items--open"]
          }`}
        >
          <li className={`${styles["footer__link"]}`}>Футболки</li>
          <li className={`${styles["footer__link"]}`}>Худі</li>
          <li className={`${styles["footer__link"]}`}>Шкарпетки</li>
          <li className={`${styles["footer__link"]}`}>Подушки</li>
        </ul>
      </li>
      <li className={`${styles["footer__cooperation"]}`}>
        <h3
          className={`${styles["footer__title"]}`}
          onClick={() => {
            setCooperationIsOpen(!cooperationIsOpen);
          }}
        >
          Співробітництво
        </h3>
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
          priority
        />
        <ul
          className={`${styles["footer__cooperation-items"]} ${
            cooperationIsOpen && styles["footer__cooperation-items--open"]
          }`}
        >
          <li className={`${styles["footer__link"]}`}>Оптовим клієнтам</li>
          <li className={`${styles["footer__link"]}`}>Дропшипінг</li>
          <li className={`${styles["footer__link"]}`}>Дизайнерам</li>
          <li className={`${styles["footer__link"]}`}>Наші ціни</li>
        </ul>
      </li>
    </>
  );
}
