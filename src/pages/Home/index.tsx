import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import List from "@/components/molecules/List/List";
import { StyledContainer, StyledFooter, StyledForm } from "./styles";

export default function Home() {
    const list = [
        { title:"React", description: "2:00"},
        { title:"Typescript", description: "1:00"},
    ];

    return (
        <>
            <StyledContainer>
                <StyledForm action="/lista">
                    <Input required label="Novo estudo: " type="text" id="fname" name="first_name" placeholder="O que você quer estudar?"/>
                    <Input required label="Tempo reservado: " type="time" id="ftime" name="time" />
                    <StyledFooter>
                    <Button>Submit</Button>
                    </StyledFooter>
                </StyledForm>
                <List title="Estudos do dia" list={list}/>
            </StyledContainer>
        </>
    )
}