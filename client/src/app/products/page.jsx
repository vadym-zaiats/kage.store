import "@/scss/pageMarkup.scss";
import { AllProducts } from "../ui/allProducts/AllProducts";

export const metadata = {
  title: "Kage.store | Усі вироби",
  description: "Products page",
};
export default function AllProductsPage({ searchParams }) {
  return (
    <main className="page-markup">
      <AllProducts searchParams={searchParams} />
    </main>
  );
}
