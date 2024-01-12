import { CurrentProduct } from "@/app/ui/currentProd/currentProd";
import styles from "./item-no.module.scss";

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
    <main className={styles[`current-product`]}>
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
    </main>
  );
}
