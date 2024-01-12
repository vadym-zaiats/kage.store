import styles from "@/scss/pageMarkup.scss";
import { Pillows } from "@/app/ui/pillows/Pillows";
export const metadata = {
  title: "Kage.store | Подушки",
  description: "Pillows page",
};
export default function PillowsPage() {
  return (
    <div className="page-markup">
      <Pillows />
    </div>
  );
}
