import "./global.css";
import { Nunito } from "next/font/google";
import Header from "./ui/header/Header.jsx";
import Footer from "./ui/footer/Footer.jsx";
import { StoreProvider } from "../redux/StoreProvider";
import styles from "./layout.module.scss";
import { connectToDatabase } from "@/utils/connectMongo";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata = {
  title: "kage.store",
  // description: "tviy.buyeer",
};

async function getData() {
  try {
    const client = await connectToDatabase();
    const db = client.db("kage-store");
    //
    const items = await db.collection("products").find({}).toArray();

    return items;
  } catch (error) {
    console.error("MongoDB connection failed: ", error);
  }
}

export default async function RootLayout({ children }) {
  const data = await getData();
  console.log(data);
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
