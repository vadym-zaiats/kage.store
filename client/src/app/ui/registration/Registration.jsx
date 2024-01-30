"use client";

import styles from "./whereIsMyOrderForm.module.scss";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import validationSchema from "./validation";

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
          htmlFor="email"
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
        <div className={styles[`form__firstname-error`]}>
          {formik.errors.firstName}
        </div>
      )}
      <button className={`${styles["form__button"]}`} type="submit">
        Submit
      </button>
    </form>
  );
}
