import styled from 'styled-components';

export const UserFormBackgroundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 31.25rem;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid red;

    form{
        margin-bottom: 100px;
        .checkbox{
            margin: 2px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #595F6E;
            border-radius: 5px;
            width: 15px;
            height: 15px;
        }
    }

    input{
        width: 200px;
        height: 30px;
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
        padding: 0 4px;
        font: 600 8px Source Sans Pro;
        letter-spacing: 0.26px;
        color: #558B2F;
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
    width: 461px;
    text-align: center;
    font: normal normal 400 10px Source Sans Pro;
    letter-spacing: 0.8px;
    color: #595F6E;
    opacity: 1;
`

export const CheckboxContainer = styled.div`
    display: flex;
`

export const CheckboxLabel = styled.label`
    width: 92px;
    height: 23px;
    text-align: left;
    font: 400 20px Roboto;
    letter-spacing: 0px;
    color: #4D4F5C;
    opacity: 1;
`