import React, { FunctionComponent } from 'react';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'

import { Container, Content } from './styles';

interface CardProps {
    avatar_url: string;
    name: string;
}

export const Card: FunctionComponent<CardProps> = ({avatar_url, name}) => {
    return (
        <Container avatar_url={avatar_url}>
            <Content>
                <h2>{name}</h2>
                <div>
                    <a href="@" aria-hidden="true">
                        <IoLogoGithub size={25} />
                    </a>
                    <a href="@" aria-hidden="true">
                        <IoLogoInstagram size={25} />
                    </a>
                    <a href="@" aria-hidden="true">
                        <IoLogoTwitter size={25} />
                    </a>
                    <a href="@" aria-hidden="true">
                        <IoLogoLinkedin size={25} />
                    </a>
                </div>
            </Content>
        </Container>
    );
};