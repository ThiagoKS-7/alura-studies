import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Watch from "@/components/atoms/Watch/Watch";
import List from "@/components/molecules/List/List";
import { ContentView, StyledContainer, StyledFooter, StyledForm, WatchContainer,WatchDescription } from "./styles";

export default function Home() {
    const list = [
        { title:"React", className:"devicon-react-original colored", description: "1:00"},
        { title: "Python", className:"devicon-python-plain colored", description: "1:00"},
        { title:"Typescript",className:"devicon-typescript-plain colored", description: "1:00"},
        { title: "Vue.js", className:"devicon-vuejs-plain colored", description: "1:30"},
        { title: "C#", className:"devicon-csharp-plain colored", description: "1:00"},
        { title: "Ruby", className:"devicon-ruby-plain colored", description:"1:00"},
        { title: "Golang", className:"devicon-go-original-wordmark colored", description: "1:45"}
    ];

    return (
        <>
            <StyledContainer>
                <ContentView>
                    <StyledForm action="/lista">
                        <Input required label="Estudo: " type="text" id="fname" name="first_name" placeholder="O que você quer estudar?"/>
                        <Input required label="Ícone: " type="text" id="icon" name="icon" placeholder="Classe devicon do icone"/>
                        <Input required label="Tempo: " type="time" id="ftime" name="time" />
                        <StyledFooter>
                        <Button>Submit</Button>
                        </StyledFooter>
                    </StyledForm>
                    <List title="Estudos do dia" list={list}/>
                </ContentView>
                <WatchContainer>
                    <WatchDescription>
                        Escolha um card e inicie o cronômetro!
                    </WatchDescription>
                    <Watch/>
                    <Button>Start</Button>
                </WatchContainer>
            </StyledContainer>
        </>
    )
}