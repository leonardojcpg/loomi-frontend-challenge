import {
  UserFormBackgroundContainer,
  LeafImg,
  HelloMessageSpanContainer
} from "./styles.js";

import leaf from "./assets/leaf.png";
import { Button } from "../Button/index.jsx";
import { Form } from "../Form/index.jsx";

export const UserForm = () => {
  return (
    <UserFormBackgroundContainer>
      <LeafImg>
        <img src={leaf} alt="" width={100} height={100} />
      </LeafImg>
      <HelloMessageSpanContainer>
        <p>Olá, faça seu cadastro abaixo!</p>
      </HelloMessageSpanContainer>
      <Form
        labelText="Usuário"
        labelPasswordText="Senha"
        checkboxText="Lembrar-me"
      />
      <div className="forgotPassword">
        <a href="_blank">Esqueci minha senha</a>
      </div>
      <Button buttonText="Cadastrar" />
      <div className="alreadyRegistered">
        <a href="/">Ja é registrado? Faça seu login</a>
      </div>
    </UserFormBackgroundContainer>
  );
};
