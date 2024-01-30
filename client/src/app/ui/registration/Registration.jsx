"use client";

import styles from "./whereIsMyOrderForm.module.scss";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import validationSchema from "./validation";

export function Registration() {
  const [firstnameIsFocused, setFirstnameIsFocused] = useState(false);
  const firstnameFocus = useRef(null);
  const [lastnameIsFocused, setLastnameIsFocused] = useState(false);
  const lastnameFocus = useRef(null);
  const [loginIsFocused, setLoginIsFocused] = useState(false);
  const loginFocus = useRef(null);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const emailFocus = useRef(null);

  // firstName
  const handleSelectedFirstname = () => {
    firstnameFocus.current.focus();
  };
  const handleFirstnameFocus = () => {
    setFirstnameIsFocused(true);
  };
  const handleFirstnameBlur = () => {
    setFirstnameIsFocused(false);
  };
  // lastName
  const handleSelectedLastname = () => {
    lastnameFocus.current.focus();
  };
  const handleLastnameFocus = () => {
    setLastnameIsFocused(true);
  };
  const handleLastnameBlur = () => {
    setLastnameIsFocused(false);
  };
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
  // Email
  const handleSelectedEmail = () => {
    emailFocus.current.focus();
  };
  const handleEmailFocus = () => {
    setEmailIsFocused(true);
  };
  const handleEmailBlur = () => {
    setEmailIsFocused(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      password: "",
      passwordSecond: "",
      telephone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={`${styles["form"]}`} onSubmit={formik.handleSubmit}>
      <div
        className={`${styles["form__firstname"]} ${
          formik.touched.firstName &&
          formik.errors.firstName &&
          styles["data__invalid"]
        }`}
      >
        <input
          className={styles[`form__firstname-input`]}
          type="text"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.values.firstName ? null : handleFirstnameBlur}
          onFocus={handleFirstnameFocus}
          ref={firstnameFocus}
        />
        <label
          htmlFor="firstName"
          onClick={handleSelectedFirstname}
          className={`${styles["form__firstname-label"]} ${
            firstnameIsFocused && styles["input-focused"]
          } ${
            formik.touched.firstName &&
            formik.errors.firstName &&
            styles["data__invalid"]
          }`}
        >
          Імʼя
        </label>
      </div>
      {formik.touched.firstName && formik.errors.firstName && (
        <div className={styles[`form__error`]}>{formik.errors.firstName}</div>
      )}
      <div
        className={`${styles["form__lastname"]} ${
          formik.touched.lastName &&
          formik.errors.lastName &&
          styles["data__invalid"]
        }`}
      >
        <input
          className={styles[`form__lastname-input`]}
          type="text"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.values.lastName ? null : handleLastnameBlur}
          onFocus={handleLastnameFocus}
          ref={lastnameFocus}
        />
        <label
          htmlFor="lastName"
          onClick={handleSelectedLastname}
          className={`${styles["form__lastname-label"]} ${
            lastnameIsFocused && styles["input-focused"]
          } ${
            formik.touched.lastName &&
            formik.errors.lastName &&
            styles["data__invalid"]
          }`}
        >
          Прізвище
        </label>
      </div>
      {formik.touched.lastName && formik.errors.lastName && (
        <div className={styles[`form__error`]}>{formik.errors.lastName}</div>
      )}
      <div
        className={`${styles["form__login"]} ${
          formik.touched.login && formik.errors.login && styles["data__invalid"]
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
          Логін
        </label>
      </div>
      {formik.touched.login && formik.errors.login && (
        <div className={styles[`form__error`]}>{formik.errors.login}</div>
      )}
      <button className={`${styles["form__button"]}`} type="submit">
        Зареєструватись
      </button>
    </form>
  );
}
