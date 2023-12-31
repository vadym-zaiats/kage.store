import styles from "./agreement.module.scss";
import { Agreement } from "../ui/agreement/agreement";

export default function AgreementPage() {
  return (
    <div className={styles.agreement}>
      <Agreement />
    </div>
  );
}
