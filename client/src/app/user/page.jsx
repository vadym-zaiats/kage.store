import styles from "@/scss/pageMarkup.scss";
import { User } from "../ui/user/User";

export const metadata = {
  title: "Kage.store | Моя сторінка",
  description: "User page",
};

export default function UserPage() {
  return (
    <main className="page-markup">
      <User />
    </main>
  );
}
