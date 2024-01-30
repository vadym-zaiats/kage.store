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
  email: Yup.string()
    .email("Некоректна пошта")
    .min(6, "Мінімум 6 букви")
    .max(30, "Максимум 30 букв")
    .required("Поле має бути заповнено"),
  // need more checks
  password: Yup.string()
    .min(7, "Мінімум 7 символів")
    .max(30, "Максимум 30 символів")
    .matches(/^[a-zA-Z]/, "Пароль повинен містити тільки латинські літери")
    .matches(/\d/, "Пароль повинен містити хоча б одне число")
    .matches(/[a-z]/, "Пароль має містити принаймні одну малу літеру")
    .matches(/[A-Z]/, "Пароль має містити принаймні одну велику літеру")
    .matches(/^[a-zA-Z0-9]+$/, "Пароль не повинен містити пробілів")
    .required("Поле має бути заповнено"),
  passwordSecond: Yup.string()
    .oneOf([Yup.ref("password"), null], "Паролі мають співпадати")
    .required("Поле має бути заповнено"),
  telephone: Yup.string()
    .matches(/^380\d{9}$/, "Номер має бути у форматі 380ХХХХХХХХХ")
    .required("Поле має бути заповнено"),
});

export default validationSchema;
