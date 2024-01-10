import "./global.css";
import { Nunito } from "next/font/google";
import Header from "./ui/header/Header.jsx";
import Footer from "./ui/footer/Footer.jsx";
import { StoreProvider } from "../redux/StoreProvider";
import styles from "./layout.module.scss";
import { getAllProducts } from "@/api/getProducts";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata = {
  title: "kage.store",
  // description: "tviy.buyeer",
};

export default async function RootLayout({ children }) {
  const data = await getAllProducts();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className={styles[`wrapper`]}>
          <StoreProvider products={data}>
            <Header />
            {children}
          </StoreProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
