/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { ForgotPassword } from "./loginFormStyles";
import { useState } from "react";
import { Button } from "../Button";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = ({ labelText, labelPasswordText }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
        try {
          const authenticatedResponse = await fetch(
            "http://localhost:3000/dashboard",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (authenticatedResponse.status === 200) {
            toast.success("Login successful");
            history.push("/dashboard");
          } else {
            toast.error("Failed to fetch dashboard data");
          }
        } catch (error) {
          toast.error(`Error fetching dashboard data: ${error.message}`);
        }
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error(`Error logging in: ${error.message}`);
    }
  };
  return (
    <form onSubmit={handleLogin}>
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
      <ForgotPassword>
        <a href="_blank">Esqueci minha senha</a>
      </ForgotPassword>
      <Button buttonText="Login" />
    </form>
  );
};

LoginForm.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelPasswordText: PropTypes.string.isRequired,
};
