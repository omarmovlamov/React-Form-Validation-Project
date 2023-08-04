import React from "react";
import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Portal() {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          university: "",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="User name"
              name="username"
              type="text"
              placeholder="Write User name"
            />
            <CustomSelect
              label="Your University"
              name="university"
              placeholder="Select Your University"
            >
              <option value="">Select Your University</option>
              <option value="Oxford">Oxford</option>
              <option value="Cambridge">Cambridge</option>
              <option value="Stanford">Stanford</option>
              <option value="Harvard ">Harvard </option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
            <Link className="formLink" to="/">
              Go To General
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Portal;
