import styles from "@/scss/pageMarkup.scss";
import { Agreement } from "../ui/agreement/agreement";

export const metadata = {
  title: "Kage.store | Згода",
  description: "Agreement page",
};

export default function AgreementPage() {
  return (
    <main className="page-markup">
      <Agreement />
    </main>
  );
}
