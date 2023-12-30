import styles from "./deliveryPayment.module.scss";
import { Delivery } from "../ui/delivery/Delivery";
import { Payment } from "../ui/payment/Payment";

export default function DeliveryPaymentPage() {
  return (
    <div className={styles[`delivery-payment`]}>
      <h2 className={styles[`delivery-payment__title`]}>ДОСТАВКА ТА ОПЛАТА</h2>
      <Delivery />
      <Payment />
    </div>
  );
}
