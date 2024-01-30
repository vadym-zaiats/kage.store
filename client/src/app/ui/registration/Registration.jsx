"use client";

import styles from "./whereIsMyOrderForm.module.scss";
import { useRef, useState } from "react";

export function Registration() {
  const [firstnameIsFocused, setfirstnameIsFocused] = useState(false);
  const firstnameFocus = useRef(null);

  const handleSelectedName = () => {
    firstnameFocus.current.focus();
  };
  const handleFirstnameFocus = () => {
    setfirstnameIsFocused(true);
  };
  const handleFirstnameBlur = () => {
    setfirstnameIsFocused(false);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    // lastName: "",
    // login: "",
    // email: "",
    // password: "",
    // passwordSecond: "",
    // phone: "",
  });
  const { firstName } = formData;

  const [validationErrors, setValidationErrors] = useState({
    name: null,
    // lastName: null,
    // login: null,
  });
  const validateForm = () => {
    let errors = {};
    if (firstName.length < 2 || firstName.length > 60) {
      errors.firstName = "Firstname must be between 2 and 60 characters";
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
    const isFormValid = firstName.length > 0;
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
            onClick={handleSelectedName}
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
