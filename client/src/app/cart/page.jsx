import styles from "./cart.module.scss";
import { CartList } from "../ui/cartList/CartList";

export default function CartPage() {
  return (
    <div className={styles.cart}>
      <CartList />
    </div>
  );
}
