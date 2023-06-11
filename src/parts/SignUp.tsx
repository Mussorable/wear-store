import Input from "./s-components/Input";
import React, { useState } from "react";

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
    // const { displayName, email, password, confirmPassword } = initialFormValue;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
