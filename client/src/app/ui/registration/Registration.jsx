"use client";

import styles from "./registration.module.scss";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import validationSchema from "./validation";
import { useCreateCustomerMutation } from "@/redux/api/customersApi";

export function Registration() {
  const [firstnameIsFocused, setFirstnameIsFocused] = useState(false);
  const firstnameFocus = useRef(null);
  const [lastnameIsFocused, setLastnameIsFocused] = useState(false);
  const lastnameFocus = useRef(null);
  const [loginIsFocused, setLoginIsFocused] = useState(false);
  const loginFocus = useRef(null);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const emailFocus = useRef(null);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const passwordFocus = useRef(null);
  const [passwordSecondIsFocused, setPasswordSecondIsFocused] = useState(false);
  const passwordSecondFocus = useRef(null);
  const [telephoneIsFocused, setTelephoneIsFocused] = useState(false);
  const telephoneFocus = useRef(null);
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
  // PasswordSecond
  const handleSelectedPasswordSecond = () => {
    passwordSecondFocus.current.focus();
  };
  const handlePasswordSecondFocus = () => {
    setPasswordSecondIsFocused(true);
  };
  const handlePasswordSecondBlur = () => {
    setPasswordSecondIsFocused(false);
  };
  // Telephone
  const handleSelectedTelephone = () => {
    telephoneFocus.current.focus();
  };
  const handleTelephoneFocus = () => {
    setTelephoneIsFocused(true);
  };
  const handleTelephoneBlur = () => {
    setTelephoneIsFocused(false);
  };

  const [createCustomer] = useCreateCustomerMutation();

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
    validationSchema,
    onSubmit: (values) => {
      createCustomer(values);
    },
  });
  return (
    <form className={`${styles["form"]}`} onSubmit={formik.handleSubmit}>
      <h3 className={`${styles["form__title"]}`}>Реєстрація</h3>
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
      <div
        className={`${styles["form__email"]} ${
          formik.touched.email && formik.errors.email && styles["data__invalid"]
        }`}
      >
        <input
          className={styles[`form__email-input`]}
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.values.email ? null : handleEmailBlur}
          onFocus={handleEmailFocus}
          ref={emailFocus}
        />
        <label
          htmlFor="email"
          onClick={handleSelectedEmail}
          className={`${styles["form__email-label"]} ${
            emailIsFocused && styles["input-focused"]
          } ${
            formik.touched.email &&
            formik.errors.email &&
            styles["data__invalid"]
          }`}
        >
          E-mail
        </label>
      </div>
      {formik.touched.email && formik.errors.email && (
        <div className={styles[`form__error`]}>{formik.errors.email}</div>
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
      <div
        className={`${styles["form__password-second"]} ${
          formik.touched.passwordSecond &&
          formik.errors.passwordSecond &&
          styles["data__invalid"]
        }`}
      >
        <input
          className={styles[`form__password-second-input`]}
          type="password"
          id="passwordSecond"
          name="passwordSecond"
          value={formik.values.passwordSecond}
          onChange={formik.handleChange}
          onBlur={
            formik.values.passwordSecond ? null : handlePasswordSecondBlur
          }
          onFocus={handlePasswordSecondFocus}
          ref={passwordSecondFocus}
        />
        <label
          htmlFor="passwordSecond"
          onClick={handleSelectedPasswordSecond}
          className={`${styles["form__password-second-label"]} ${
            passwordSecondIsFocused && styles["input-focused"]
          } ${
            formik.touched.passwordSecond &&
            formik.errors.passwordSecond &&
            styles["data__invalid"]
          }`}
        >
          Повтроити пароль
        </label>
      </div>
      {formik.touched.passwordSecond && formik.errors.passwordSecond && (
        <div className={styles[`form__error`]}>
          {formik.errors.passwordSecond}
        </div>
      )}
      <div
        className={`${styles["form__telephone"]} ${
          formik.touched.telephone &&
          formik.errors.telephone &&
          styles["data__invalid"]
        }`}
      >
        <input
          className={styles[`form__telephone-input`]}
          type="text"
          id="telephone"
          name="telephone"
          value={formik.values.telephone}
          onChange={formik.handleChange}
          onBlur={formik.values.telephone ? null : handleTelephoneBlur}
          onFocus={handleTelephoneFocus}
          ref={telephoneFocus}
        />
        <label
          htmlFor="telephone"
          onClick={handleSelectedTelephone}
          className={`${styles["form__telephone-label"]} ${
            telephoneIsFocused && styles["input-focused"]
          } ${
            formik.touched.telephone &&
            formik.errors.telephone &&
            styles["data__invalid"]
          }`}
        >
          Номер телефону
        </label>
      </div>
      {formik.touched.telephone && formik.errors.telephone && (
        <div className={styles[`form__error`]}>{formik.errors.telephone}</div>
      )}
      <button className={`${styles["form__button"]}`} type="submit">
        Зареєструватись
      </button>
    </form>
  );
}
