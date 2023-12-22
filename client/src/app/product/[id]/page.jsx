import styles from "../product.module.scss";

export default function CurrentProduct({ params: { id } }) {
  return <div className={styles[`product`]}>CURRENT PRODUCT itemNo: {id}</div>;
}
