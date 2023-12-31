import styles from "./contract.module.scss";
import { Contract } from "../ui/contract/Contract";

export default function ContractPage() {
  return (
    <div className={styles.contract}>
      <h2 className={styles.contract__title}>ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ</h2>
      <Contract />
    </div>
  );
}
