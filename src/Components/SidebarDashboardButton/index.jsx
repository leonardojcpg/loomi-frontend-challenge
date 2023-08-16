import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { DashboardButton } from "./styles.js";

export const SidebarDashboardButton = ({ buttonName }) => {
  const navigate = useNavigate();

  const handleSubmitDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <DashboardButton onClick={handleSubmitDashboard}>
      {buttonName}
    </DashboardButton>
  );
};

SidebarDashboardButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
