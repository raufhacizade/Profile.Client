import React from "react";
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import EmailInput from "./EmailInput";
import { Link } from "react-router-dom";
import { emailValidator } from "../utils/validators/emailValidator";

const UserForm = ({user, handleSubmit}) => {
  const initialValues = {
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    email: user ? user.email : "",
    address: user ? user.address : "",
    phoneNumber: user ? user.phoneNumber : "",
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={(data) => handleSubmit(data)}
      render={(formRenderProps) => (
        <FormElement>
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"}>
              Please fill in the fields:
            </legend>
            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"firstName"}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"First name"}
                  required={true}
                  initialvalue={user ? user.firstName : ""}
                />
              </div>
            </FieldWrapper>

            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"lastName"}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"Last name"}
                  required={true}
                />
              </div>
            </FieldWrapper>

            <FieldWrapper>
              <Field
                name={"email"}
                type={"email"}
                component={EmailInput}
                label={"Email"}
                validator={emailValidator}
                required={true}
              />
            </FieldWrapper>

            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"address"}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"Address"}
                />
              </div>
            </FieldWrapper>

            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"phoneNumber"}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"Phone Number"}
                />
              </div>
            </FieldWrapper>
          </fieldset>
          <div className="k-form-buttons">
            <Link
              to="/"
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
            >
              Back
            </Link>
            <button
              type={"submit"}
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </button>
          </div>
        </FormElement>
      )}
    />
  );
};
export default UserForm;
