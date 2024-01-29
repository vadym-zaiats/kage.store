"use client";

import { useRef, useState } from "react";
import styles from "./modalCart.module.scss";
import Image from "next/image";
import { modalIsOpenSelector, setModal } from "@/redux/slices/cartSlice";
import { cartSelector } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "@/redux/middlewares/postOrder";

export function ModalCart() {
  const dispatch = useDispatch();
  const isOpen = useSelector(modalIsOpenSelector);
  const products = useSelector(cartSelector);
  const [nameIsFocused, setNameIsFocused] = useState(false);
  const [phoneIsFocused, setPhoneIsFocused] = useState(false);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const nameFocus = useRef(null);
  const phoneFocus = useRef(null);
  const emailFocus = useRef(null);

  const handleSelectedName = () => {
    nameFocus.current.focus();
  };
  const handleSelectedPhone = () => {
    phoneFocus.current.focus();
  };
  const handleSelectedEmail = () => {
    emailFocus.current.focus();
  };

  const handleNameFocus = () => {
    setNameIsFocused(true);
  };
  const handlePhoneFocus = () => {
    setPhoneIsFocused(true);
  };
  const handleEmailFocus = () => {
    setEmailIsFocused(true);
  };

  const handleNameBlur = () => {
    setNameIsFocused(false);
  };
  const handlePhoneBlur = () => {
    setPhoneIsFocused(false);
  };
  const handleEmailBlur = () => {
    setEmailIsFocused(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { name, phone, email } = formData;

  const [validationErrors, setValidationErrors] = useState({
    name: null,
    phone: null,
    email: null,
  });
  const validateForm = () => {
    const emailRegex =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    const phoneRegex = /^380([0-9]{9})$/;
    let errors = {};
    if (name.length < 2 || name.length > 60) {
      errors.name = "Name must be between 2 and 60 characters";
    }

    if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!phoneRegex.test(phone)) {
      errors.phone = "Invalid Ukrainian phone format";
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
    const isFormValid = name.length > 0 && email.length > 0 && phone.length > 0;
    return isFormValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const letterSubject = "Дякуємо за замовлення";
      const letterHtml = `
      <div>
        ТЕКСТ ДЛЯ НАДСИЛАННЯ НА ПОШТУ КОРИСТУВАЧА
      </div>`;
      dispatch(
        postOrder({ phone, email, products, letterSubject, letterHtml })
      );
    } else {
      console.log("Form has validation errors");
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles[`modal`]}>
          <h3 className={styles[`modal__title`]}>Форма для замовлення</h3>
          <button
            className={`${styles["modal__close"]}`}
            onClick={() => {
              dispatch(setModal());
            }}
          >
            <Image
              src="/imgs/close.png"
              width={20}
              height={20}
              alt="burger"
              priority
            />
          </button>
          <form className={styles[`modal__form`]} onSubmit={handleSubmit}>
            <div
              className={`${styles["form__name"]} ${
                validationErrors.name && styles["data__invalid"]
              }`}
            >
              <input
                className={styles[`form__name-input`]}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={name ? null : handleNameBlur}
                onFocus={handleNameFocus}
                ref={nameFocus}
              />
              <label
                onClick={handleSelectedName}
                className={`${styles["form__name-label"]} ${
                  nameIsFocused && styles["input-focused"]
                } ${validationErrors.name && styles["data__invalid"]}`}
              >
                Імʼя
              </label>
            </div>
            <div
              className={`${styles["form__validation"]} ${
                validationErrors.name && styles["data__invalid"]
              }`}
            >
              {validationErrors.name && `${validationErrors.name}`}
            </div>
            <div
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
              {validationErrors.phone &&
                "Номер має бути у форматі 380ХХХХХХХХХ"}
            </div>
            <div
              className={`${styles["form__email"]} ${
                validationErrors.email && styles["data__invalid"]
              }`}
            >
              <input
                className={styles[`form__email-input`]}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={email ? null : handleEmailBlur}
                onFocus={handleEmailFocus}
                ref={emailFocus}
              />
              <label
                onClick={handleSelectedEmail}
                className={`${styles["form__email-label"]} ${
                  emailIsFocused && styles["input-focused"]
                } ${validationErrors.email && styles["data__invalid"]}`}
              >
                Email
              </label>
            </div>
            <div
              className={`${styles["form__validation"]} ${
                validationErrors.email && styles["data__invalid"]
              }`}
            >
              {validationErrors.email && `${validationErrors.email}`}
            </div>
            <button
              className={`${styles["form__button"]} ${
                isFormFilled() && styles["enabled"]
              }`}
              type="submit"
              disabled={!isFormFilled()}
            >
              Зробити замовлення
            </button>
          </form>
        </div>
      )}
    </>
  );
}
