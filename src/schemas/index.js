import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid e-mail")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Please enter your age correctly")
    .integer("Please enter integer")
    .required("Age is required"),
  password: yup
    .string()
    .min(5, "Please enter a minimum of 5 characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number.",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Password needs to be re-entered"),
});
export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "User name must contain at least 3 characters")
    .required("User name is required"),
  university: yup
    .string()
    .oneOf(
      ["Oxford", "Cambridge", "Stanford ", "Harvard"],
      "Please select your university"
    )
    .required("Please select your university"),
  isAccepted: yup.boolean().oneOf([true], "Accept the terms of use"),
});
