import styles from "./contacts.module.scss";
import { Contacts } from "../ui/contacts/Contacts";

export default function ContactsPage(params) {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__title}>КОНТАКТИ</h2>
      <Contacts />
    </div>
  );
}
