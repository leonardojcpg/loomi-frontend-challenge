import styled from 'styled-components';

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column; /* Adicione essa linha para alinhar os textos verticalmente */
`;

export const OcupationUserTextContainer = styled.div`
    position: relative; /* Adicione essa linha para habilitar o posicionamento */
    h3 {
        position: absolute;
        top: 0;
        left: 0;
        width: 104px;
        height: 20px;
        color: #558B2F;
        margin: 0; /* Remova a margem padrão para posicionamento mais preciso */
    }
`;

export const UserNameTextContainer = styled.div`
    position: relative; /* Adicione essa linha para habilitar o posicionamento */
    span {
        position: absolute;
        margin-top: 4px;
        top: 35px; /* Ajuste a distância vertical entre os textos */
        left: 0;
        width: 98px;
        height: 22px;
        text-align: left;
        letter-spacing: 0.64px;
        color: #191B1D;
        opacity: 1;
        margin: 0; /* Remova a margem padrão para posicionamento mais preciso */
    }
`;
