/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { ForgotPassword } from "./loginFormStyles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../Button/index.jsx";

import "react-toastify/dist/ReactToastify.css";
import { Api } from "../../../Service/index.jsx";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export const LoginForm = ({ labelText, labelPasswordText }) => {
  const schema = yup.object({
    email: yup.string().required("Email required"),
    password: yup.string().required("Password required"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate()

  const handleLogin = async (data) => {
    try {
      const response = await Api.post("/login", data);
      const { token } = response.data; 
      localStorage.setItem("token", token);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
      
    } catch (error) {
      toast.error(`Error logging in: ${error.message}`);
    }
  };
  

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <label>{labelText}</label>
      <input
        className="inputName"
        type="text"
        {...register("email")}
        {...errors.email?.message}
      />

      <label>{labelPasswordText}</label>
      <input
        className="inputPassword"
        type="password"
        {...register("password")}
        {...errors.password?.message}
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
