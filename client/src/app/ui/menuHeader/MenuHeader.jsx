import styles from "./menuHeader.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";

export function MenuHeader({ func }) {
  const dispatch = useDispatch();
  return (
    <ul className={`${styles["menu-head"]}`}>
      <li>
        <button
          className={`${styles["menu-close"]}`}
          onClick={() => {
            dispatch(func());
          }}
        >
          <Image
            src="/imgs/close.png"
            width={25}
            height={25}
            alt="burger"
            priority
          />
        </button>
      </li>
      <li>
        <Image
          src="/imgs/logo-removebg.png"
          width={70}
          height={70}
          alt="burger"
          priority
        />
      </li>
    </ul>
  );
}
