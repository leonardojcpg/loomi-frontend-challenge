import { Button } from "@chakra-ui/react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

export const SidebarDashboardButton = ({buttonName}) => {
  const navigate = useNavigate();

  const handleSubmitDashboard = () => {
    navigate("/dashboard");
  }; 

  return <Button colorScheme='teal' variant='outline' onClick={handleSubmitDashboard}>{buttonName}</Button>;
};


SidebarDashboardButton.propTypes = {
    buttonName: PropTypes.string.isRequired,
}