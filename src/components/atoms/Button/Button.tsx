import React from 'react';
import { StyledButton } from './styles';
import { TButtonProps } from './@types';

function Button(props:TButtonProps) {
    return(
        <>
            <StyledButton>
                {props.children}
            </StyledButton>
        </>
    )
}

export default Button;