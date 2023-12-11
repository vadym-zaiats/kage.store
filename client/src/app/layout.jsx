import "./global.css";
import { Montserrat } from "next/font/google";
import Header from "./ui/header/page";
import Footer from "./ui/footer/page";
import { StoreProvider } from "@/redux/slices/StoreProvider";
import styles from "./layout.module.scss";

const mont = Montserrat({ subsets: ["latin"], weight: "900" });

export const metadata = {
  title: "kage.store",
  // description: "tviy.buyeer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles[mont.className]}>
        <StoreProvider>
          <div className={styles[`wrapper`]}>
            <Header />
            <main className={styles[`main`]}>{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
