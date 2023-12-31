"use client";

import styles from "./contacts.module.scss";
import Image from "next/image";

export function Contacts() {
  return (
    <div className={styles.contacts__content}>
      <div className={styles.contacts__left}>
        <div className={styles.contacts__type}>
          <Image
            src="/imgs/contacts/office.png"
            width={25}
            height={25}
            alt="logo"
            priority
          />
          Адреса офісу:
        </div>
        <p className={styles.contacts__info}>м. Київ, ТЦ Глобус</p>
        <div className={styles.contacts__type}>
          <Image
            src="/imgs/contacts/schedule.png"
            width={25}
            height={25}
            alt="logo"
            priority
          />
          Час роботи:
        </div>
        <div className={styles.contacts__info}>
          <p>пн-пт: з 09:00 до 18:00</p>
          <p>сб: з 10:00 до 14:00 (тільки call центр)</p>
          <p>нд: вихідний</p>
        </div>
        <div className={styles.contacts__type}>
          <Image
            src="/imgs/contacts/phone.png"
            width={25}
            height={25}
            alt="logo"
            priority
          />
          Телефони:
        </div>
        <div className={styles.contacts__info}>
          <p>+38 (095) 180 55 85</p>
          <p>+38 (063) 365 51 12</p>
          <p>+38 (098) 514 29 09</p>
        </div>
        <div className={styles.contacts__type}>
          <Image
            src="/imgs/contacts/messengers.png"
            width={25}
            height={25}
            alt="logo"
            priority
          />
          Месенджери:
        </div>
        <div className={styles.contacts__info}>
          <p>Telegram: @kagestore_bot</p>
          <p>Viber: @kagestore_bot</p>
          <p>Facebook: @kagestore.com.ua</p>
        </div>
        <div className={styles.contacts__type}>
          <Image
            src="/imgs/contacts/email.png"
            width={25}
            height={25}
            alt="logo"
            priority
          />
          Пошта:
        </div>
        <p className={styles.contacts__info}>admin@kagestore.com.ua</p>
      </div>
      <div className={styles.contacts__right}>
        <div className={styles.contacts__type}>
          <Image
            src="/imgs/contacts/delivery.png"
            width={25}
            height={25}
            alt="logo"
            priority
          />
          Час роботи:
        </div>
        <p>
          Ми відправляємо замовлення Новою поштою кожен день з понеділка по
          п`ятницю. Час відправлення близько 16 години.
        </p>
        <p>
          Ми відправляємо замовлення Укрпоштою кожен день з понеділка по
          п`ятницю. Час відправлення близько 16 години.
        </p>
        <p>У суботу і неділю відправок немає.</p>
        <div className={styles.contacts__type}>Самовивіз:</div>
        <p>Наразі послуга самовивозу недоступна.</p>
      </div>
      <div className={styles.contacts__map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.0021470212216!2d30.521324267562047!3d50.45057572721975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce505f2c2b6f%3A0x3c708bc302925049!2z0KLQpiBHTE9CVVM!5e0!3m2!1suk!2sua!4v1689360541297!5m2!1suk!2sua"
          width="100%"
          height="200"
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
