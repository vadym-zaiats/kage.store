import styles from "@/scss/pageMarkup.scss";
import { News } from "../ui/news/News";
export const metadata = {
  title: "Kage.store | Новини",
  description: "News page",
};
export default function NewsPage() {
  return (
    <div className="page-markup">
      <News />
    </div>
  );
}
