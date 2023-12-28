import styles from "./full-info.module.scss";
import { NewYearSchedule } from "@/app/ui/NewYearSchedule/NewYearSchedule";
export default function FullNewsInfoPage() {
  return (
    <div className={`${styles["full-info"]}`}>
      <NewYearSchedule />
    </div>
  );
}
