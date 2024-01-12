import styles from "@/scss/pageMarkup.scss";
import { Returning } from "../ui/returning/Returning";
export const metadata = {
  title: "Kage.store | Повернення",
  description: "Returning page",
};
export default function ReturningPage() {
  return (
    <main className="page-markup">
      <Returning />
    </main>
  );
}
