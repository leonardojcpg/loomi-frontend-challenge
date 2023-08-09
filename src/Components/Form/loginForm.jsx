/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { CheckboxContainer, CheckboxLabel, ForgotPassword } from "./styles.js";
import { useState } from "react";

import { Button } from "../Button";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = ({
  labelText,
  labelPasswordText,
  checkboxText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (!email.trim()) {
      toast.error("email is required!");
      return false
    }

    if (!password.trim()) {
      toast.error("email is required!");
      return false
    }
    return true
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        if (response.status === 201) {
          toast.success("User registered successfully");
        } else {
          toast.error("Failed to register user");
        }
      } catch (error) {
        toast.error(`Error registering user: ${error.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <label>{labelText}</label>
      <input
        className="inputName"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>{labelPasswordText}</label>
      <input
        className="inputPassword"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <CheckboxContainer>
        <input
          className="checkbox"
          type="checkbox"
          id="remindMe"
          name="remindMe"

        />
        <CheckboxLabel className="remindMe" htmlFor="remindMe">
          {checkboxText}
        </CheckboxLabel>
      </CheckboxContainer>
      <ForgotPassword>
        <a href="_blank">Esqueci minha senha</a>
      </ForgotPassword>
      <Button buttonText="Login" />
    </form>
  );
};

LoginForm.propTypes = {
  labelText: PropTypes.string.isRequired,
  checkboxText: PropTypes.string.isRequired,
  labelPasswordText: PropTypes.string.isRequired,
};
