import upImg from "./assets/upDashboardImg.svg"
import downImg from "./assets/downDashboardImg.svg"
import {HeaderImg, FooterImg} from './styles'


export const BackgroundDashboard = () => {
  return (
    <div className="containerContent">
      <HeaderImg>
        <img src={upImg} alt="" height={150} width={250} />
      </HeaderImg>
      <FooterImg>
      <img src={downImg} alt=""  height={250} width={250}/>
      </FooterImg>
    </div>
  );
};
