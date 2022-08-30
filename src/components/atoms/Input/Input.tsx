import { InputContainer, LabelContainer, StyledInput,StyledLabel,StyledRow } from './styles';
import { TInputProps } from './@types';

export default function Input(props:TInputProps) {
    return(
        <StyledRow>
            {
                props.label ? (
                    <LabelContainer>
                        <StyledLabel>
                            {props.label}
                        </StyledLabel>
                    </LabelContainer>
                ) : <></>
            }
            <InputContainer>
                <StyledInput required={props.required ? props.required : false} type={props.type} id={props.id ? props.id : "df_input" } name={props.name ? props.name : "df_input"} placeholder={props.placeholder ? props.placeholder : ""}/>
            </InputContainer>
        </StyledRow>
    )
}