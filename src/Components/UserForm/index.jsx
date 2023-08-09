import {
  UserFormBackgroundContainer,
  LeafImg,
  HelloMessageSpanContainer
} from "./styles.js";

import leaf from "./assets/leaf.png";
import { RegisterForm } from "../Form/registerForm.jsx";

export const UserForm = () => {
  return (
    <UserFormBackgroundContainer>
      <LeafImg>
        <img src={leaf} alt="" width={100} height={100} />
      </LeafImg>
      <HelloMessageSpanContainer>
        <p>Olá, faça seu cadastro abaixo!</p>
      </HelloMessageSpanContainer>
      <RegisterForm
        labelText="Email"
        labelPasswordText="Senha"
        checkboxText="Lembrar-me"
      />
      <div className="alreadyRegistered">
        <a href="/">Ja é registrado? Faça seu login</a>
      </div>
    </UserFormBackgroundContainer>
  );
};
