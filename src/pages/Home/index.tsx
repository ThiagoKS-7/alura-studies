import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import { StyledContainer, StyledFooter, StyledForm } from "./styles";

export default function Home() {
    return (
        <>
            <StyledContainer>
                <StyledForm action="/lista">
                    <Input required label="First Name" type="text" id="fname" name="first_name" placeholder="Your name..."/>
                    <Input required label="Last Name" type="text" id="fname" name="last_name" placeholder="Last name..."/>
                    <StyledFooter>
                    <Button>Submit</Button>
                    </StyledFooter>
                </StyledForm>
            </StyledContainer>
        </>
    )
}