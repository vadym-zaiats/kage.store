import styles from "./news.module.scss";
import { News } from "../ui/news/News";

export default function NewsPage() {
  return (
    <div className={styles.news}>
      <h3 className={styles.news__title}>Новини</h3>
      <News />
    </div>
  );
}
