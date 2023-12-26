import { CurrentProduct } from "@/app/ui/currentProd/currentProd";
import styles from "./itemNo.module.scss";

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
