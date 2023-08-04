import PropTypes from "prop-types";

import { ButtonComponent } from "./styles.js";

export const Button = ({buttonText}) => {
  return <ButtonComponent>{buttonText}</ButtonComponent>;
};


Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
}