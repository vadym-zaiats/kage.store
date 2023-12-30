import styles from "./payment.module.scss";

export function Payment() {
  return (
    <div className={styles.payment}>
      <h3 className={styles.payment__title}>ОПЛАТА</h3>
      <h4 className={styles.payment__subtitle}>Онлайн на карту:</h4>
      <p>
        Після оформлення замовлення Ви маєте змогу одразу його оплатити онлайн,
        використовуючи сервіс LiqPay.
      </p>
      <p>
        Для цього потрібно обрати відповідний спосіб оплати, після цього Ви
        будете перенаправлені на захищену сторінку платіжної системи, на якій Ви
        можете здійснити оплату, використовуючи свою банківську картку.
      </p>
      <p>
        У разі 100% передоплати на картку та якщо Ваше замовлення від 1000 грн,
        то доставка на відділення Нової пошти або Укрпошти – БЕЗКОШТОВНО (окрім
        крісел мішків). Якщо вартість замовлення менше 1000 грн або замовлення
        сплачено не повністю, то доставка здійснюється за тарифами Нової Пошти.
      </p>
      <h4 className={styles.payment__subtitle}>Післяплата:</h4>
      <p>
        Деякі речі ми можемо відправити на умовах післяплати, але ми залишаємо
        за собою право відмовити у післяплати, якщо:
      </p>
      <p>1. Сума замовлення понад 600 грн.</p>
      <p>2. У замовленні є основи із повним друком/3D.</p>
      <p>3. У замовленні є худі/реглан.</p>
      <p>
        4. Замовлення містить індивідуальний дизайн, створений через
        конструктор, надісланий на пошту.
      </p>
      <p>
        5. Замовлення містить базовий дизайн, який було відредаговано, змінено
        розташування, відкориговано кольори, додано написи.
      </p>
      <p>
        6. Клієнт раніше робив замовлення післяплатою і не забрав посилку на
        пошті.
      </p>
    </div>
  );
}
