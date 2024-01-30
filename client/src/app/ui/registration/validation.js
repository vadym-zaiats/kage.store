import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Мінімум 2 букви")
    .max(25, "Максимум 25 букв")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Тільки літери")
    .required("Поле має бути заповнено"),
  lastName: Yup.string()
    .min(2, "Мінімум 2 букви")
    .max(25, "Максимум 25 букв")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Тільки літери")
    .required("Поле має бути заповнено"),
  login: Yup.string()
    .min(4, "Мінімум 4 букви")
    .max(10, "Максимум 10 букв")
    .matches(/^[a-zA-Z0-9]*$/, "Тільки латинські літери та цифри без пробілів")
    .required("Поле має бути заповнено"),
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .min(6, "Min 6 letters required")
  //   .max(30, "Max 30 letters required")
  //   .required("This field is required!"),
  // password: Yup.string()
  //   .min(7, "Min 7 letters required")
  //   .max(30, "Max 30 letters allowed")
  //   .matches(/^[a-zA-Z]/, "Password must contain Latin letters only")
  //   .matches(/\d/, "Password must contain at least one number")
  //   .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  //   .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  //   .matches(/^[a-zA-Z0-9]+$/, "Password must not contain spaces")
  //   .required("This field is required!"),
  // passwordSecond: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match")
  //   .required("This field is required!"),
  // telephone: Yup.string()
  //   .matches(
  //     /^\+380\s?\(\d{2}\)\s?\d{2}\s?\d{2}\s?\d{3}$/,
  //     "Invalid phone number"
  //   )
  //   .required("This field is required!"),
});

export default validationSchema;
