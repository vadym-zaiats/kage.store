"use client";

import styles from "./whereIsMyOrderForm.module.scss";
import { useFormik } from "formik";
import { useState, useRef } from "react";

export function Registration() {
  const [firstnameIsFocused, setFirstnameIsFocused] = useState(false);
  const firstnameFocus = useRef(null);
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

  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={`${styles["form"]}`} onSubmit={formik.handleSubmit}>
      {/* <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      /> */}
      <div className={`${styles["form__firstname"]}`}>
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
          htmlFor="email"
          onClick={handleSelectedFirstname}
          className={`${styles["form__firstname-label"]} ${
            firstnameIsFocused && styles["input-focused"]
          }`}
        >
          Імʼя
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
