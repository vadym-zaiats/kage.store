"use client";

import styles from "./delivery.module.scss";
import { useState } from "react";

export function Delivery() {
  const [newPost, setNewPost] = useState(true);
  const [newPostDelivery, setNewPostDelivery] = useState(false);
  const [ukrPost, setukrPost] = useState(false);

  return (
    <div className={styles.delivery}>
      <h3 className={styles.delivery__title}>ДОСТАВКА</h3>
      <ul className={styles.delivery__types}>
        <li
          onClick={() => {
            setNewPost(true);
            setNewPostDelivery(false);
            setukrPost(false);
          }}
          className={`${styles["delivery__type"]} ${
            styles["delivery__type--new-post"]
          } ${newPost && styles["delivery__type--active"]}`}
        >
          Нова Пошта
        </li>
        <li
          onClick={() => {
            setNewPost(false);
            setNewPostDelivery(true);
            setukrPost(false);
          }}
          className={`${styles["delivery__type"]} ${
            styles["delivery__type--new-post-delivery"]
          } ${newPostDelivery && styles["delivery__type--active"]}`}
        >
          Адресна доставка Новою поштою
        </li>
        <li
          onClick={() => {
            setNewPost(false);
            setNewPostDelivery(false);
            setukrPost(true);
          }}
          className={`${styles["delivery__type"]} ${
            styles["delivery__type--ukr-post"]
          } ${ukrPost && styles["delivery__type--active"]}`}
        >
          Укрпошта
        </li>
      </ul>
      <ul className={`${styles["delivery__types-content"]}`}>
        <li
          className={`${styles["delivery__type-content"]} ${
            styles["delivery__type-content--new-post"]
          } ${newPost && styles["delivery__type-content--active"]}`}
        >
          NP
        </li>
        <li
          className={`${styles["delivery__type-content"]} ${
            styles["delivery__type-content--new-post-delivery"]
          } ${newPostDelivery && styles["delivery__type-content--active"]}`}
        >
          NPD
        </li>
        <li
          className={`${styles["delivery__type-content"]} ${
            styles["delivery__type-content--ukr-post"]
          } ${ukrPost && styles["delivery__type-content--active"]}`}
        >
          UP
        </li>
      </ul>
    </div>
  );
}
