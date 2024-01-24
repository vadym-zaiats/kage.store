"use client";

import styles from "./priceRange.module.scss";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

export function PriceRange() {
  const [minPriceIsFocused, setMinPriceIsFocused] = useState(false);
  const [maxPriceIsFocused, setMaxPriceIsFocused] = useState(false);
  const minFocus = useRef(null);
  const maxFocus = useRef(null);

  const handleSelectedMin = () => {
    minFocus.current.focus();
  };
  const handleSelectedMax = () => {
    maxFocus.current.focus();
  };
  const handleMinFocus = () => {
    setMinPriceIsFocused(true);
  };
  const handleMinBlur = () => {
    setMinPriceIsFocused(false);
  };
  const handleMaxFocus = () => {
    setMaxPriceIsFocused(true);
  };
  const handleMaxBlur = () => {
    setMaxPriceIsFocused(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const { name, phone } = formData;

  const [validationErrors, setValidationErrors] = useState({
    name: null,
    phone: null,
  });
  const validateForm = () => {
    const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;
    let errors = {};
    if (name.length < 2 || name.length > 60) {
      errors.name = "Name must be between 2 and 60 characters";
    }
    if (!phoneRegex.test(phone)) {
      errors.phone = "Формат повинен бути +380ХХХХХХХХХ";
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
    const isFormValid = name.length > 0 && phone.length > 0;
    return isFormValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // const validFormData = new FormData();
      // Object.entries(formData).forEach(([key, value]) => {
      //   validFormData.set(key, value);
      // });
      // dispatch(postCard({ validFormData, token }));
    } else {
      console.log("Form has validation errors");
    }
  };

  return (
    <div className={styles[`form`]}>
      <div className={`${styles["form__name"]}`}>
        <input
          className={styles[`form__name-input`]}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={name ? null : handleMinBlur}
          onFocus={handleMinFocus}
          ref={minFocus}
        />
        <label
          onClick={handleSelectedMin}
          className={`${styles["form__name-label"]} ${
            minPriceIsFocused && styles["input-focused"]
          }`}
        >
          від
        </label>
      </div>
      <div className={`${styles["form__phone"]}`}>
        <input
          className={styles[`form__phone-input`]}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={phone ? null : handleMaxBlur}
          onFocus={handleMaxFocus}
          ref={maxFocus}
        />
        <label
          onClick={handleSelectedMax}
          className={`${styles["form__phone-label"]} ${
            maxPriceIsFocused && styles["input-focused"]
          }`}
        >
          до
        </label>
      </div>
      <button className={`${styles["form__button"]}`}>Ok</button>
    </div>
  );
}
