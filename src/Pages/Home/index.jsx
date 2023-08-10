import { CornerPage } from "../../Components/CornerPage";
import {
  UserFormBackgroundContainer,
  LeafImg,
  HelloMessageSpanContainer,
} from "../../Components/UserForm/styles";

import leaf from "../../Components/UserForm/assets/leaf.png";
import { LoginForm } from "../../Components/Form/LoginForm/loginForm";

export const Home = () => {
  return (
    <>
      <CornerPage />
      <UserFormBackgroundContainer>
        <LeafImg>
          <img src={leaf} alt="" width={100} height={100} />
        </LeafImg>
        <HelloMessageSpanContainer>
          <p>Olá, faça seu cadastro abaixo!</p>
        </HelloMessageSpanContainer>
        <LoginForm
          labelText="Email"
          labelPasswordText="Senha"
        />
        <div className="alreadyRegistered">
          <a href="/">Ja é registrado? Faça seu login</a>
        </div>
      </UserFormBackgroundContainer>
    </>
  );
};
