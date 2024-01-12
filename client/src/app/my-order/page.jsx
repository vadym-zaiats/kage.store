import styles from "@/scss/pageMarkup.scss";
import { WhereIsMyOrder } from "../ui/whereIsMyOrder/WhereIsMyOrder";
export const metadata = {
  title: "Kage.store | Де моє замолення",
  description: "Where is my order page",
};
export default function MyOrderPage() {
  return (
    <div className="page-markup">
      <WhereIsMyOrder />
    </div>
  );
}
