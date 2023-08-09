import styled from 'styled-components';

export const UserFormBackgroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 31.25rem;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form{
        margin-bottom: 5.625rem;
        .checkbox{
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #595F6E;
            border-radius: 0.313rem;
            width: 1rem;
            height: 0.938rem;
        }
    }

    .inputName{
        padding-left: 0.5rem;
        width: 16.875rem;
        height: 1.875rem;
        display: flex;
        border: 0.063rem solid #558B2F;
        border-radius: 0.35rem;
        transform: translate(0%, -30%);
    }

    .inputPassword{
        padding-left: 0.5rem;
        width: 16.875rem;
        height: 1.875rem;
        display: flex;
        border: 0.063rem solid #558B2F;
        border-radius: 0.35rem;
        transform: translate(0%, -30%);
    }

    label{
        margin-left: 0.6rem;
        position: relative;
        z-index: 1;
        background-color: white; 
        padding: 0 0.25rem;
        font: 600 0.625rem Source Sans Pro;
        letter-spacing: 0.26px;
        color: #558B2F;
    }

    input.checkbox{
        margin-top: -0.05rem;
        margin-right: -0.6rem;

    }

    .alreadyRegistered{
        margin-top: -5rem;
        font-size: 0.7rem;
    }
`;

export const LeafImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(0, -60%);
`

export const HelloMessageSpanContainer = styled.div`
    transform: translate(0, -90%);
    width: 28.813rem;
    text-align: center;
    font: normal 400 0.725rem Source Sans Pro;
    letter-spacing: 0.05rem;
    color: #595F6E;
    opacity: 1;
`
