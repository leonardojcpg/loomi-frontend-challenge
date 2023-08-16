import PropTypes from "prop-types";
import {
  OcupationUserTextContainer,
  TextContainer,
  UserNameTextContainer,
} from "./styles";
import { Box } from "@chakra-ui/react";

export const TextSidebarDashboard = ({
  ocupationUserText,
  userNameText,
  logoutButtonName,
}) => {
  return (
    <TextContainer>
      <OcupationUserTextContainer>
        <h3>{ocupationUserText}</h3>
      </OcupationUserTextContainer>
      <UserNameTextContainer>
        <span>{userNameText}</span>
      </UserNameTextContainer>
      <Box
        as='button'
        width={50}
        height='24px'
        marginLeft={150}
        lineHeight='1.2'
        marginBottom={250}
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='none'
        px='8px'
        borderRadius='2px'
        fontSize='14px'
        fontWeight='semibold'
        bg='#558B2F'
        borderColor='#ccd0d5'
        color='#fff'
        _hover={{ bg: '#ebedf0', color: '#558B2F' }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
      >
        {logoutButtonName}
      </Box>
    </TextContainer>
  );
};

TextSidebarDashboard.propTypes = {
  ocupationUserText: PropTypes.string.isRequired,
  userNameText: PropTypes.string.isRequired,
  logoutButtonName: PropTypes.string.isRequired,
};
