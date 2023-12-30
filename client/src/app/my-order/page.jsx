import styles from "./myOrder.module.scss";
import { WhereIsMyOrder } from "../ui/whereIsMyOrder/WhereIsMyOrder";

export default function MyOrderPage() {
  return (
    <div className={styles[`where-is-my-order`]}>
      <WhereIsMyOrder />
    </div>
  );
}
