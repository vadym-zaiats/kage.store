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
        <p className={styles.contacts__info}>
          м. Хмельницький, пров. Сімона Петлюри, 54/2
        </p>
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
      <div className={styles.contacts__map}>map</div>
    </div>
  );
}
