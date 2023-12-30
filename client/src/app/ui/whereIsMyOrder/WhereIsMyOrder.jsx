import styles from "./whereIsMyOrder.module.scss";
import { WhereIsMyOrderForm } from "./whereIsMyOrderForm/WhereIsMyOrderForm";

export function WhereIsMyOrder() {
  return (
    <div className={styles[`where-is-my-order`]}>
      <h2 className={styles[`where-is-my-order__title`]}>
        ДІЗНАТИСЬ ПРОСТАТУС ВИКОНАННЯ ЗАМОВЛЕННЯ
      </h2>
      <p>
        Ви можете переглянути статус замовлення або сплатити Ваше замовлення,
        заповнивши поля нижче.
      </p>
      <p>
        Вкажіть у полях номер замовлення, який Вам надійшов у смс повідомленні,
        а також номер телефону, який Ви вказали при оформленні замовлення.
      </p>
      <p>І натисніть кнопку "Надіслати".</p>
      <WhereIsMyOrderForm />
    </div>
  );
}
