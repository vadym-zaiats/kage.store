import styles from "@/scss/pageMarkup.scss";
import { Delivery } from "../ui/delivery/Delivery";
import { Payment } from "../ui/payment/Payment";
export const metadata = {
  title: "Kage.store | Доставка та оплата",
  description: "Delivery page",
};
export default function DeliveryPaymentPage() {
  return (
    <main className="page-markup">
      <Delivery />
      <Payment />
    </main>
  );
}
