import styles from "@/scss/pageMarkup.scss";
import { Contacts } from "../ui/contacts/Contacts";
export const metadata = {
  title: "Kage.store | Контакти",
  description: "Contacts page",
};
export default function ContactsPage(params) {
  return (
    <main className="page-markup">
      <Contacts />
    </main>
  );
}
