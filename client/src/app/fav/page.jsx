import styles from "./fav.module.scss";
import { FavList } from "../ui/favList/FavList";

export default function FavouritePage() {
  return (
    <div className={styles[`favourite`]}>
      <FavList />
    </div>
  );
}
