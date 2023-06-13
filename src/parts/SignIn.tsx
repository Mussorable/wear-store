import React, { useState } from "react";
import {
  signInWithGooglePopup,
  signInWithGoogleEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import Button from "./s-components/Button";
import Input from "./s-components/Input";
import ErrorHandler from "../utils/error-handler/errorHandler.js";
import { FirebaseError } from "firebase/app";

const SignIn = () => {
  const googleUserPopup = async () => {
    await signInWithGooglePopup();
  };

  const initialFormValue = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialFormValue);

  const handleFormChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formValues;

    try {
      if (!email || !password) return;
      const getResp = async () => {
        await signInWithGoogleEmailAndPassword(email, password);
      };

      await getResp();
      setFormValues(initialFormValue);
    } catch (error) {
      const { code } = error as FirebaseError;
      ErrorHandler(code);
    }
  };

  return (
    <div className="signin-form-container">
      <div className="heading-wrapper">
        <h2>Already have an account?</h2>
        <p>Sign in with your email and password</p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <Input
          label
          required
          id="signin-email"
          autoComplete="email"
          placeholder="Email"
          type="email"
          name="email"
          value={formValues["email"]}
          onChange={handleFormChange}
        />
        <Input
          label
          required
          id="signin-password"
          autoComplete="current-password"
          placeholder="Password"
          type="password"
          name="password"
          value={formValues["password"]}
          onChange={handleFormChange}
        />
        <div className="button-wrapper">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            additionalClasses="google"
            onClick={googleUserPopup}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
