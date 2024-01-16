import "@/scss/pageMarkup.scss";
import { AllProducts } from "../ui/allProducts/AllProducts";

export const metadata = {
  title: "Kage.store | Усі пропозиції",
  description: "Products page",
};
export default function AllProductsPage() {
  return (
    <main className="page-markup">
      <AllProducts />
    </main>
  );
}
