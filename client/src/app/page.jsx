import { Hot } from "./ui/hot/page";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles[`main`]}>
      <Hot />
    </main>
  );
}
