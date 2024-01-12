import styles from "@/scss/pageMarkup.scss";
import { Hoodie } from "@/app/ui/hoodies/Hoodie";
export const metadata = {
  title: "Kage.store | Худі",
  description: "Hoodies page",
};
export default function HoodiePage() {
  return (
    <main className="page-markup">
      <Hoodie />
    </main>
  );
}
