import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.9);
    -webkit-box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.9);
    -moz-box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.9);

    border: none;
    border-radius: 10px; 
    background: #303030;  

    margin-bottom: 13px;  

    button {
        height: 35px;
        width: 50px;
        background: #9d03fc;
        transition: background 0.2s;
        border: none;
        border-radius: 0 10px 10px 0;

        :hover {
            background: #7200b8;
        }
    }

    input {
        flex:1;
        height: 35px;
        border: none;
        background: transparent;
        color: #fefefe;
        outline: none;
        font-size: 1rem;
        padding: 10px;
    }
`;