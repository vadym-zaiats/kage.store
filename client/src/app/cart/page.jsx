import styles from "@/scss/pageMarkup.scss";
import { CartList } from "../ui/cartList/CartList";
export const metadata = {
  title: "Kage.store | Корзина",
  description: "Cart page",
};
export default function CartPage() {
  return (
    <div className="page-markup">
      <CartList />
    </div>
  );
}
