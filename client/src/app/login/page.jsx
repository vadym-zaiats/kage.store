import "@/scss/pageMarkup.scss";
import { Login } from "../ui/login/Login";

export const metadata = {
  title: "Kage.store | Авторизація",
  description: "Login page",
};

export default function LoginPage() {
  return (
    <main className="page-markup">
      <Login />
    </main>
  );
}
