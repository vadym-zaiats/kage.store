import styles from "@/scss/pageMarkup.scss";
import { Registration } from "../ui/registration/Registration";

export const metadata = {
  title: "Kage.store | Реєстрація",
  description: "Registration page",
};

export default function RegistrationPage() {
  return (
    <main className="page-markup">
      <Registration />
    </main>
  );
}
