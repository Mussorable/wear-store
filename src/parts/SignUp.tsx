import Input from "./s-components/Input";
import React, { useState } from "react";
import {
  createUserUsingEmailAndPassword,
  createUserDocumentAuth,
  auth,
} from "../utils/firebase/firebase.utils";
import { UserCredential } from "firebase/auth";

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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formValues;

    if (password !== confirmPassword) {
      console.error("Passwords don't match");
    }

    try {
      const addNoteIntoDocument = async () => {
        const { user } = await createUserUsingEmailAndPassword(email, password);
        //
        await createUserDocumentAuth(user, { displayName });
      };

      addNoteIntoDocument();
    } catch (error) {
      console.log(error);
    }

    setFormValues(initialFormValue);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Input
          required
          type="input"
          className="input"
          placeholder="Display Name"
          name="displayName"
          value={formValues["displayName"]}
          onChange={handleFormChange}
        />
        <Input
          required
          type="Email"
          className="input"
          placeholder="Email"
          name="email"
          value={formValues["email"]}
          onChange={handleFormChange}
        />
        <Input
          required
          type="Password"
          className="input"
          placeholder="Password"
          name="password"
          value={formValues["password"]}
          onChange={handleFormChange}
        />
        <Input
          required
          type="Password"
          className="input"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formValues["confirmPassword"]}
          onChange={handleFormChange}
        />
        <Input type="submit" className="input" value="Sign Up" />
      </form>
    </>
  );
};

export default SignUp;
