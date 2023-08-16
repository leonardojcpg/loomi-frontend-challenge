import styled from "@emotion/styled"

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    height: 100vh;
`;

export const HeaderImg = styled.div`
    margin-top: -4rem;
`;

export const FooterImg = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

export const FooterImgContent = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: -4rem;
`;


export const DashboardImgButton = styled.img`
    align-items: center;
    display: flex;
    position: fixed;
    transform: translateY(-50%);
    transform: translateX(140%);
    font-family: "Source Sans Pro";
    font-weight: 500;
    color: #558b2f;
    letter-spacing: 0.04rem;
    z-index: 1;
    top: 9rem;

`
export const DashboardButtonContainer = styled.div`
    position: relative; /* Permite posicionar elementos filhos */
    display: inline-flex;
    align-items: center;
    
    &:hover{
        opacity: 90%;
    }
`