"use client";

import styles from "../registration/registration.module.scss";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import validationSchema from "./validation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetCustomerTokenMutation } from "@/redux/api/customersApi";

export function Login() {
  const router = useRouter();
  const [loginIsFocused, setLoginIsFocused] = useState(false);
  const loginFocus = useRef(null);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const passwordFocus = useRef(null);

  // Login
  const handleSelectedLogin = () => {
    loginFocus.current.focus();
  };
  const handleLoginFocus = () => {
    setLoginIsFocused(true);
  };
  const handleLoginBlur = () => {
    setLoginIsFocused(false);
  };
  // Password
  const handleSelectedPassword = () => {
    passwordFocus.current.focus();
  };
  const handlePasswordFocus = () => {
    setPasswordIsFocused(true);
  };
  const handlePasswordBlur = () => {
    setPasswordIsFocused(false);
  };

  const [getCustomerToken, { data, error, isLoading }] =
    useGetCustomerTokenMutation();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await getCustomerToken(values).unwrap();
        localStorage.setItem("token", JSON.stringify(res.token));
        router.push("/user");
      } catch (err) {
        console.error("Помилка:", err);
      }
    },
  });
  return (
    <>
      <form className={`${styles["form"]}`} onSubmit={formik.handleSubmit}>
        <h3 className={`${styles["form__title"]}`}>Авторизація</h3>
        <div
          className={`${styles["form__login"]} ${
            formik.touched.login &&
            formik.errors.login &&
            styles["data__invalid"]
          }`}
        >
          <input
            className={styles[`form__login-input`]}
            type="text"
            id="login"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.values.login ? null : handleLoginBlur}
            onFocus={handleLoginFocus}
            ref={loginFocus}
          />
          <label
            htmlFor="login"
            onClick={handleSelectedLogin}
            className={`${styles["form__login-label"]} ${
              loginIsFocused && styles["input-focused"]
            } ${
              formik.touched.login &&
              formik.errors.login &&
              styles["data__invalid"]
            }`}
          >
            Логін або E-mail
          </label>
        </div>
        {formik.touched.login && formik.errors.login && (
          <div className={styles[`form__error`]}>{formik.errors.login}</div>
        )}
        <div
          className={`${styles["form__password"]} ${
            formik.touched.password &&
            formik.errors.password &&
            styles["data__invalid"]
          }`}
        >
          <input
            className={styles[`form__password-input`]}
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.values.password ? null : handlePasswordBlur}
            onFocus={handlePasswordFocus}
            ref={passwordFocus}
          />
          <label
            htmlFor="password"
            onClick={handleSelectedPassword}
            className={`${styles["form__password-label"]} ${
              passwordIsFocused && styles["input-focused"]
            } ${
              formik.touched.password &&
              formik.errors.password &&
              styles["data__invalid"]
            }`}
          >
            Пароль
          </label>
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className={styles[`form__error`]}>{formik.errors.password}</div>
        )}
        <button className={`${styles["form__button"]}`} type="submit">
          Увійти
        </button>
      </form>
      <div className={`${styles["form__registration"]}`}>
        Якщо не маєте акаунту, можете
        <p>
          <Link
            href="/registration"
            className={`${styles["form__registration--link"]}`}
          >
            Зареєструватись
          </Link>
        </p>
      </div>
    </>
  );
}
