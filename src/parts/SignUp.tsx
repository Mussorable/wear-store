import Input from "./s-components/Input";
import React, { useState } from "react";
import {
  createUserUsingEmailAndPassword,
  createUserDocumentAuth,
} from "../utils/firebase/firebase.utils";
import Button from "./s-components/Button";
import ErrorHandler from "../utils/error-handler/errorHandler";
import { FirebaseError } from "firebase/app";

const SignUp = () => {
  const initialFormValue = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(initialFormValue);

  const handleFormChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formValues;

    if (password !== confirmPassword) {
      console.error("Passwords don't match");
    }

    try {
      const addNoteIntoDocument = async () => {
        const { user } = await createUserUsingEmailAndPassword(email, password);
        await createUserDocumentAuth(user, { displayName });
      };

      await addNoteIntoDocument();
    } catch (error) {
      const { code } = error as FirebaseError;
      ErrorHandler(code);
    }

    setFormValues(initialFormValue);
  };

  return (
    <div className="signup-form-container">
      <div className="heading-wrapper">
        <h2>Don't have an account?</h2>
        <p>Sign up with your email and password</p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <Input
          autoComplete="given-name"
          id="signup-name"
          label
          required
          type="input"
          placeholder="Display Name"
          name="displayName"
          value={formValues["displayName"]}
          onChange={handleFormChange}
        />
        <Input
          autoComplete="email"
          id="signup-email"
          label
          required
          type="Email"
          placeholder="Email"
          name="email"
          value={formValues["email"]}
          onChange={handleFormChange}
        />
        <Input
          autoComplete="new-password"
          id="signup-password"
          label
          required
          type="Password"
          placeholder="Password"
          name="password"
          value={formValues["password"]}
          onChange={handleFormChange}
        />
        <Input
          autoComplete="new-password"
          id="signup-confirm-password"
          label
          required
          type="Password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formValues["confirmPassword"]}
          onChange={handleFormChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
