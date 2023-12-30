import styles from "./deliveryType.module.scss";

export function DeliveryType({
  term,
  sending,
  payment,
  cost,
  type,
  typeHow,
  receiving,
  receivingHow,
}) {
  return (
    <div className={styles.delivery__type}>
      <div className={`${styles["delivery__left-side"]}`}>
        <p>
          Термін доставки:
          <br />
          <span>{term}</span>
        </p>
        <p>
          Відправлення замовлення:
          <br />
          <span>{sending}</span>
        </p>
        <p>
          Як сплатити замовлення:
          <br />
          <span>{payment}</span>
        </p>
        <p>
          Вартість доставки:
          <br />
          <span>{cost}</span>
        </p>
        <p>
          *Вартість доставки може змінюватися як у більшу, так і в меншу
          сторону, залежно від ваги, обсягу та вартості замовлення.
        </p>
      </div>
      <div className={`${styles["delivery__right-side"]}`}>
        <p>
          {type}
          <br />
          <span>{typeHow}</span>
        </p>
        <p>
          {receiving}
          <br />
          <span>{receivingHow}</span>
        </p>
        <p>
          Увага !!! Доставка крісла мішка можлива тільки Укрпоштою на
          відділення.
        </p>
      </div>
    </div>
  );
}
