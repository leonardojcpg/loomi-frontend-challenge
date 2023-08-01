import {UserFormBackgroundContainer, LeafImg} from './styles.js'
import leaf from './assets/leaf.png'
export const UserForm = () => {
    return (
        <UserFormBackgroundContainer>
            <LeafImg>
                <img src={leaf} alt="" width={100} height={100}/>
            </LeafImg>
            <div className="helloMessageParagraph"></div>
            <div className="form"></div>
            <div className="forgotPassword"></div>
            <div className="button"></div>
        </UserFormBackgroundContainer>
    )
}