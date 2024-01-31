import styles from "./menuHeader.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, clearUser } from "@/redux/slices/userSlice";
import Link from "next/link";

export function MenuHeader({ func, loginButton }) {
  const dispatch = useDispatch();
  const userIsLogin = useSelector(userSelector);
  console.log(userIsLogin);
  return (
    <ul className={`${styles["menu-head"]}`}>
      {loginButton && !userIsLogin && (
        <li>
          <Link
            href="/login"
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
      {loginButton && userIsLogin && (
        <li>
          <Link
            href="/"
            className={`${styles["menu-login"]}`}
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(clearUser());
              dispatch(func());
            }}
          >
            <Image
              src="/imgs/logout.png"
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
