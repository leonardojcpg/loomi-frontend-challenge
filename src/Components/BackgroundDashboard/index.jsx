import upImg from "./assets/upDashboardImg.svg";
import downImg from "./assets/downDashboardImg.svg";
import { HeaderImg, FooterImg, ContainerContent, FooterImgContent } from "./styles";
import { SidebarDashboardButton } from "../SidebarDashboardButton";

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
      <SidebarDashboardButton buttonName="Dashboard"/>
    </ContainerContent>
  );
};
