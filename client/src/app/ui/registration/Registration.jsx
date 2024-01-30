"use client";

import styles from "./whereIsMyOrderForm.module.scss";
import { useRef, useState } from "react";

export function Registration() {
  const [firstnameIsFocused, setFirstnameIsFocused] = useState(false);
  const firstnameFocus = useRef(null);
  const [lastnameIsFocused, setLastnameIsFocused] = useState(false);
  const lastnameFocus = useRef(null);
  const [loginIsFocused, setLoginIsFocused] = useState(false);
  const loginFocus = useRef(null);
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    login: "",
    // email: "",
    // password: "",
    // passwordSecond: "",
    // phone: "",
  });
  const { firstName, lastName, login } = formData;

  const [validationErrors, setValidationErrors] = useState({
    firstName: null,
    lastName: null,
    login: null,
  });
  const validateForm = () => {
    let errors = {};
    if (firstName.length < 2 || firstName.length > 60) {
      errors.firstName = "Firstname must be between 2 and 60 characters";
    }
    if (lastName.length < 2 || lastName.length > 60) {
      errors.lastName = "Lastname must be between 2 and 60 characters";
    }
    if (login.length < 2 || login.length > 60) {
      errors.login = "Login must be between 2 and 60 characters";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };
  const isFormFilled = () => {
    // const isFormValid = name.length > 0 && phone.length > 0;
    const isFormValid =
      firstName.length > 0 && lastName.length > 0 && login.length > 0;
    return isFormValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      //post
    } else {
      console.log("Form has validation errors");
    }
  };

  return (
    <div className={styles[`form`]}>
      <form className={styles[`form__body`]} onSubmit={handleSubmit}>
        <div
          className={`${styles["form__firstname"]} ${
            validationErrors.firstName && styles["data__invalid"]
          }`}
        >
          <input
            className={styles[`form__firstname-input`]}
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={firstName ? null : handleFirstnameBlur}
            onFocus={handleFirstnameFocus}
            ref={firstnameFocus}
          />
          <label
            onClick={handleSelectedFirstname}
            className={`${styles["form__firstname-label"]} ${
              firstnameIsFocused && styles["input-focused"]
            } ${validationErrors.firstName && styles["data__invalid"]}`}
          >
            Імʼя
          </label>
        </div>
        <div
          className={`${styles["form__validation"]} ${
            validationErrors.firstName && styles["data__invalid"]
          }`}
        >
          {validationErrors.firstName && `${validationErrors.firstName}`}
        </div>
        <div
          className={`${styles["form__lastname"]} ${
            validationErrors.lastName && styles["data__invalid"]
          }`}
        >
          <input
            className={styles[`form__lastname-input`]}
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={lastName ? null : handleLastnameBlur}
            onFocus={handleLastnameFocus}
            ref={lastnameFocus}
          />
          <label
            onClick={handleSelectedLastname}
            className={`${styles["form__lastname-label"]} ${
              lastnameIsFocused && styles["input-focused"]
            } ${validationErrors.lastName && styles["data__invalid"]}`}
          >
            Прізвище
          </label>
        </div>
        <div
          className={`${styles["form__validation"]} ${
            validationErrors.lastName && styles["data__invalid"]
          }`}
        >
          {validationErrors.lastName && `${validationErrors.lastName}`}
        </div>
        <div
          className={`${styles["form__login"]} ${
            validationErrors.login && styles["data__invalid"]
          }`}
        >
          <input
            className={styles[`form__login-input`]}
            type="text"
            id="login"
            name="login"
            value={formData.login}
            onChange={handleChange}
            onBlur={login ? null : handleLoginBlur}
            onFocus={handleLoginFocus}
            ref={loginFocus}
          />
          <label
            onClick={handleSelectedLogin}
            className={`${styles["form__login-label"]} ${
              loginIsFocused && styles["input-focused"]
            } ${validationErrors.login && styles["data__invalid"]}`}
          >
            Логін
          </label>
        </div>
        <div
          className={`${styles["form__validation"]} ${
            validationErrors.login && styles["data__invalid"]
          }`}
        >
          {validationErrors.login && `${validationErrors.login}`}
        </div>
        <button
          className={`${styles["form__button"]} ${
            isFormFilled() && styles["enabled"]
          }`}
          type="submit"
          disabled={!isFormFilled()}
        >
          Зареєструватись
        </button>
      </form>
    </div>
  );
}
