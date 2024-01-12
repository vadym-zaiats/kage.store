import { CurrentProduct } from "@/app/ui/currentProd/currentProd";
import styles from "./item-no.module.scss";
export const metadata = {
  title: "Kage.store | T-SHIRTS",
  description: "Kage.store t-shirts page",
};
export default function CurrentProductPage({ searchParams }) {
  const {
    name,
    currentPrice,
    imageUrls,
    itemNo,
    quantity,
    categories,
    date,
    hot,
    sale,
  } = searchParams;

  return (
    <div className={styles[`current-product`]}>
      <CurrentProduct
        name={name}
        currentPrice={currentPrice}
        imageUrls={imageUrls}
        itemNo={itemNo}
        quantity={quantity}
        categories={categories}
        date={date}
        hot={hot}
        sale={sale}
      />
    </div>
  );
}
