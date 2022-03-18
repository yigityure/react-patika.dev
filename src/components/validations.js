import { object, string, ref } from "yup";

const validations = object({
  email: string()
    .email("Please enter a valid email")
    .required("Required field"),
  password: string()
    .min(5, "Password must be 5 character at least")
    .required("Required field"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Passwords must be same")
    .required("Required field"),
});

export default validations;
