import styles from "@/scss/pageMarkup.scss";
import { Delivery } from "../ui/delivery/Delivery";
import { Payment } from "../ui/payment/Payment";

export default function DeliveryPaymentPage() {
  return (
    <div className="page-markup">
      <Delivery />
      <Payment />
    </div>
  );
}
