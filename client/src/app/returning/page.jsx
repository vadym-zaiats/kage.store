import styles from "./returning.module.scss";
import { Returning } from "../ui/returning/Returning";

export default function ReturningPage() {
  return (
    <div className={styles.returning}>
      <Returning />
    </div>
  );
}
