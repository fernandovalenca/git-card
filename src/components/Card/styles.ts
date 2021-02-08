import styled, { css } from 'styled-components';

interface CardProps {
    avatar_url?: string;
    name?: string;
}

export const Container = styled.div<CardProps>`
    height: 379px;
    width: 300px;
    border-radius: 10px;
    background: white;
    overflow: hidden;
    box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.9);
    -webkit-box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.9);
    -moz-box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background 0.8s;

    ${props => props.avatar_url && css`
        background: url(${props.avatar_url}) center no-repeat;
        background-size: 380px;

        :hover {
            background: url(${props.avatar_url}) left no-repeat;
            background-size: 450px;

            h2 {
                visibility: visible;
                opacity: 1;
            }
        }
    `}
`;

export const Content = styled.div`
    height: 369px;
    width: 290px;
    background: transparent;
    border-radius: 10px;
    position: relative;

    h2 {
        color: #fff;
        margin: 20px;
        visibility: hidden;
        opacity: 0;
        transition: opacity 1s;
    }

    div {
        position: absolute;
        fill: #fff;
        color: #fff;
        height: 130px;
        top: 226px;
        width: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        a {
            svg {
                visibility: hidden;
                color: #fff;
                opacity: 0;
                transition: opacity 1s;
            }
        }
    }

    :hover {
        div {
            a {
                svg {
                    visibility: visible;
                    opacity: 1;
                }
            }
        }
    }
`;