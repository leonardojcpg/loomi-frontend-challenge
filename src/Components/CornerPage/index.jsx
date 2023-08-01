import cornerLeftImg from '../../Assets/cornerLeft.png';
import cornerRightImg from '../../Assets/cornerRight.png';
import { CornerPageBackground, CornerLeft, CornerRight } from './styles';

export const CornerPage = () => {
    return (
        <CornerPageBackground>
            <CornerLeft>
                <img src={cornerLeftImg} alt="" width={200} height={200} />
            </CornerLeft>
            <CornerRight>
                <img src={cornerRightImg} alt="" width={200} height={200} />
            </CornerRight>
        </CornerPageBackground>
    );
};
