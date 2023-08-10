/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { CheckboxContainer, CheckboxLabel, ForgotPassword } from "./styles.js";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../Button/index.jsx";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterForm = ({
  labelText,
  labelPasswordText,
  checkboxText,
}) => {

  const schema = yup.object({
    email: yup.string().required("Email required"),
    password: yup.string().required("Password required")
  })


  const {register, formState: {errors}, handleSubmit} = useForm({
    resolver: yupResolver(schema)
  })


  return (
    <form onSubmit={handleSubmit}>
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
      <Button buttonText="Cadastrar" />
    </form>
  );
};

RegisterForm.propTypes = {
  labelText: PropTypes.string.isRequired,
  checkboxText: PropTypes.string.isRequired,
  labelPasswordText: PropTypes.string.isRequired,
};
