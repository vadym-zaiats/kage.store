import styles from "./menuHeader.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Link from "next/link";

export function MenuHeader({ func, loginButton }) {
  const dispatch = useDispatch();
  return (
    <ul className={`${styles["menu-head"]}`}>
      {loginButton && (
        <li>
          <Link
            href="/registration"
            className={`${styles["menu-login"]}`}
            onClick={() => {
              dispatch(func());
            }}
          >
            <Image
              src="/imgs/login.png"
              width={35}
              height={35}
              alt="login"
              priority
            />
          </Link>
        </li>
      )}
      <li>
        <Image
          src="/imgs/logo-removebg.png"
          width={70}
          height={70}
          alt="burger"
          priority
        />
      </li>
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
    </ul>
  );
}
