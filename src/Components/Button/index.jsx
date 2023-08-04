import PropTypes from "prop-types";

import { RegisterButton } from "./styles.js";

export const Button = ({buttonText}) => {
  return <RegisterButton>{buttonText}</RegisterButton>;
};


Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
}