import React, { ComponentType, FunctionComponent, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    Icon?: ComponentType<IconBaseProps>;
    name: string;
}

export const SearchInput: FunctionComponent<InputProps> = ({Icon, ...rest}) => {

    return (
        <Container>
            <input type="text" {...rest} />
            <button type="submit">
                {Icon && <Icon size={20} color="#fff" />}
            </button>
        </Container>
    )
}