import PropTypes from "prop-types";

import { CheckboxContainer, CheckboxLabel } from "./styles.js";

export const Form = ({ labelText, labelPasswordText, checkboxText }) => {
  return (
    <>
      <form>
        <label>{labelText}</label>
        <input className="inputName" type="name" />

        <label>{labelPasswordText}</label>
        <input className="inputPassword" type="password" />

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
