import {
  UserFormBackgroundContainer,
  LeafImg,
  HelloMessageSpanContainer,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
} from "./styles.js";
import leaf from "./assets/leaf.png";

export const UserForm = () => {
  return (
    <UserFormBackgroundContainer>
      <LeafImg>
        <img src={leaf} alt="" width={100} height={100} />
      </LeafImg>
      <HelloMessageSpanContainer>
        <p>Olá, faça seu login abaixo!</p>
      </HelloMessageSpanContainer>
      <form>
        <label>UserName</label>
        <input type="name" />

        <label>Password</label>
        <input type="password" />

        <CheckboxContainer>
          <CheckboxInput type="checkbox" id="remindMe" name="remindMe" />
          <CheckboxLabel htmlFor="remindMe">Remind-me</CheckboxLabel>
        </CheckboxContainer>
      </form>
      <div className="forgotPassword"></div>
      <div className="button"></div>
    </UserFormBackgroundContainer>
  );
};
