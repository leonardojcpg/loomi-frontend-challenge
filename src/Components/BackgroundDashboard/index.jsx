import upImg from "./assets/upDashboardImg.svg";
import downImg from "./assets/downDashboardImg.svg";
import dashboardImg from "../SidebarDashboardButton/assets/dashboard.svg";

import {
  HeaderImg,
  FooterImg,
  ContainerContent,
  FooterImgContent,
  DashboardImgButton,
  DashboardButtonContainer,
} from "./styles";
import { SidebarDashboardButton } from "../SidebarDashboardButton";
import { TextSidebarDashboard } from "../TextsSidebarDashboard";

export const BackgroundDashboard = () => {
  return (
    <ContainerContent>
      <HeaderImg>
        <img src={upImg} alt="" height={150} width={250} />
      </HeaderImg>

      <FooterImg>
        <FooterImgContent>
          <img src={downImg} alt="" height={250} width={250} />
        </FooterImgContent>
      </FooterImg>

      <DashboardButtonContainer>
        <DashboardImgButton src={dashboardImg} alt="" />
        <SidebarDashboardButton buttonName="Dashboard" />
      </DashboardButtonContainer>

      <TextSidebarDashboard
        ocupationUserText="Programador"
        userNameText="Leonardo Gomes"
        logoutButtonName="Sair"
      />
    </ContainerContent>
  );
};
