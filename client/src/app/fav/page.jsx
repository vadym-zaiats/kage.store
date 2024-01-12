import "@/scss/pageMarkup.scss";
import { FavList } from "../ui/favList/FavList";
export const metadata = {
  title: "Kage.store | Улюблене",
  description: "Favourite page",
};
export default function FavouritePage() {
  return (
    <div className="page-markup">
      <FavList />
    </div>
  );
}
