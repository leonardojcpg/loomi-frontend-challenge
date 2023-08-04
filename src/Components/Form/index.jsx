/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import { CheckboxContainer, CheckboxLabel } from "./styles.js";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {useHistory} from 'react-router-dom'

export const Form = ({ labelText, labelPasswordText, checkboxText }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Usuário obrigatorio"),
    password: yup.string().required("Senha Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleSignup = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso!");
        history.push("/");
      })
      .catch((err) => {
        toast.error("email ja está em uso");
      });
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>{labelText}</label>
        <input
          className="inputName"
          type="name"
          {...register("user")}
          error={!!errors.user?.message}
        />

        <label>{labelPasswordText}</label>
        <input
          className="inputPassword"
          type="password"
          {...register("password")}
          error={!!errors.password?.message}
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
      </form>
    </>
  );
};

Form.propTypes = {
  labelText: PropTypes.string.isRequired,
  checkboxText: PropTypes.string.isRequired,
  labelPasswordText: PropTypes.string.isRequired,
};
