"use client";

import styles from "./whereIsMyOrderForm.module.scss";
import { useRef, useState } from "react";

export function Registration() {
  const [firstnameIsFocused, setFirstnameIsFocused] = useState(false);
  const [lastnameIsFocused, setLastnameIsFocused] = useState(false);
  const firstnameFocus = useRef(null);
  const lastnameFocus = useRef(null);

  const handleSelectedFirstname = () => {
    firstnameIsFocused.current.focus();
  };
  const handleFirstnameIsFocusedFocus = () => {
    setFirstnameIsFocused(true);
  };
  const handleFirstnameIsFocusedBlur = () => {
    setFirstnameIsFocused(false);
  };
  const handleSelectedLastname = () => {
    lastnameIsFocused.current.focus();
  };
  const handleLastnameIsFocusedFocus = () => {
    setLastnameIsFocused(true);
  };
  const handleLastnameIsFocusedBlur = () => {
    setLastnameIsFocused(false);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    // login: "",
    // email: "",
    // password: "",
    // passwordSecond: "",
    // phone: "",
  });
  const { firstName, lastName } = formData;

  const [validationErrors, setValidationErrors] = useState({
    firstName: null,
    lastName: null,
  });
  const validateForm = () => {
    const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;
    let errors = {};
    if (firstName.length < 2 || firstName.length > 60) {
      errors.firstName = "Firstname must be between 2 and 60 characters";
    }
    if (lastName.length < 2 || lastName.length > 60) {
      errors.lastName = "Lastname must be between 2 and 60 characters";
    }
    // if (!phoneRegex.test(phone)) {
    //   errors.phone = "Формат повинен бути +380ХХХХХХХХХ";
    // }
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
    const isFormValid = firstName.length;
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
            onBlur={firstName ? null : handleFirstnameIsFocusedBlur}
            onFocus={handleFirstnameIsFocusedFocus}
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
            onBlur={lastName ? null : handleLastnameIsFocusedBlur}
            onFocus={handleLastnameIsFocusedFocus}
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
        {/* <div
          className={`${styles["form__phone"]} ${
            validationErrors.phone && styles["data__invalid"]
          }`}
        >
          <input
            className={styles[`form__phone-input`]}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={phone ? null : handlePhoneBlur}
            onFocus={handlePhoneFocus}
            ref={phoneFocus}
          />
          <label
            onClick={handleSelectedPhone}
            className={`${styles["form__phone-label"]} ${
              phoneIsFocused && styles["input-focused"]
            } ${validationErrors.phone && styles["data__invalid"]}`}
          >
            Номер телефону
          </label>
        </div>
        <div
          className={`${styles["form__validation"]} ${
            validationErrors.phone && styles["data__invalid"]
          }`}
        >
          {validationErrors.phone && "Номер має бути у форматі +380ХХХХХХХХХ"}
        </div> */}
        <button
          className={`${styles["form__button"]} ${
            isFormFilled() && styles["enabled"]
          }`}
          type="submit"
          disabled={!isFormFilled()}
        >
          Знайти замовлення
        </button>
      </form>
    </div>
  );
}
