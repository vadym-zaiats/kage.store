"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetCustomerInfoMutation } from "@/redux/api/customersApi";
import { setUser } from "@/redux/slices/userSlice";

export default function UserInit() {
  const dispatch = useDispatch();

  const [getCustomerInfo] = useGetCustomerInfoMutation();

  const setUserInfo = async () => {
    try {
      const res = await getCustomerInfo().unwrap();
      dispatch(setUser(res));
    } catch (err) {
      console.error("Помилка:", err);
    }
  };

  useEffect(() => {
    setUserInfo();
  }, []);

  return null;
}
