import { StyledInput } from './styles';
import { TInputProps } from './@types';

export default function Input(props:TInputProps) {
    return(
        <>
            <StyledInput>
                {props.children}
            </StyledInput>
        </>
    )
}