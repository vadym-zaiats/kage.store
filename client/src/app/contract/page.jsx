import styles from "@/scss/pageMarkup.scss";
import { Contract } from "../ui/contract/Contract";
export const metadata = {
  title: "Kage.store | Договір публічної оферти",
  description: "Contract page",
};
export default function ContractPage() {
  return (
    <div className="page-markup">
      <Contract />
    </div>
  );
}
