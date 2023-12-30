"use client";
import styles from "./whereIsMyOrderForm.module.scss";
import { useState } from "react";

export function WhereIsMyOrderForm() {
  const [orderNumber, setOrderNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOrderNumberChange = (e) => {
    setOrderNumber(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSearch = () => {
    console.log("Order Number:", orderNumber);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div>
      <label>
        Номер замовлення:
        <input
          type="text"
          value={orderNumber}
          onChange={handleOrderNumberChange}
        />
      </label>
      <br />
      <label>
        Номер телефону:
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <br />
      <button onClick={handleSearch}>Знайти замовлення</button>
    </div>
  );
}
