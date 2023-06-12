import Input from "./s-components/Input";
import React, { useState } from "react";
import {
  createUserUsingEmailAndPassword,
  createUserDocumentAuth,
} from "../utils/firebase/firebase.utils";
import Button from "./s-components/Button";

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
    <div className="signup-form-container">
      <h2>Don't have an account?</h2>
      <form onSubmit={handleFormSubmit}>
        <Input
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
