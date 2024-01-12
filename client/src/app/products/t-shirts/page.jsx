import styles from "@/scss/pageMarkup.scss";
import { TShirts } from "@/app/ui/tShirts/TShirts";
export const metadata = {
  title: "Kage.store | Футболки",
  description: "T-shirts page",
};
export default function TShirtPage() {
  return (
    <main className="page-markup">
      <TShirts />
    </main>
  );
}
