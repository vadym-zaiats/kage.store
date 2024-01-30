import * as Yup from "yup";

const validationSchema = Yup.object({
  login: Yup.string().required("Необхідно ввести логін або e-mail"),
  password: Yup.string().required("Необхідно ввести пароль"),
});

export default validationSchema;
