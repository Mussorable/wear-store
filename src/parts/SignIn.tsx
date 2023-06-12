import React, { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentAuth,
  signInWithGoogleEmailAndPassword,
} from "../utils/firebase/firebase.utils.js";
import Button from "./s-components/Button";
import Input from "./s-components/Input";
import ErrorHandler from "../utils/error-handler/errorHandler.js";
import { FirebaseError } from "firebase/app";
import { setUser } from "../redux-components/userSlice.js";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();

  const googleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentAuth(user);
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
        const { user } = await signInWithGoogleEmailAndPassword(
          email,
          password
        );
        const serializedUser = {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
        };
        dispatch(setUser(serializedUser));
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
          placeholder="Email"
          type="email"
          name="email"
          value={formValues["email"]}
          onChange={handleFormChange}
        />
        <Input
          label
          required
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
