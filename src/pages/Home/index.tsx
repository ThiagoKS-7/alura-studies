import React from "react";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Watch from "@/components/atoms/Watch/Watch";
import List from "@/components/molecules/List/List";
import { useCallback, useState } from "react";
import { ContentView, StyledContainer, StyledFooter, StyledForm, WatchContainer,WatchDescription } from "./styles";

export default function Home() {
    const [list, setList] = useState([
        { title:"React", className:"devicon-react-original colored", description: "1:00"},
        { title: "Python", className:"devicon-python-plain colored", description: "1:00"},
        { title:"Typescript",className:"devicon-typescript-plain colored", description: "1:00"},
        { title: "Vue.js", className:"devicon-vuejs-plain colored", description: "1:30"},
        { title: "C#", className:"devicon-csharp-plain colored", description: "1:00"},
        { title: "Ruby", className:"devicon-ruby-plain colored", description:"1:00"},
        { title: "Golang", className:"devicon-go-original-wordmark colored", description: "1:45"}
    ]);

    const handleClickItem = useCallback((event:any) => {
        if (event.target.firstChild.data !== "delete" && event.target.querySelectorAll('h3').length > 0) {
            const name = event.target.querySelectorAll('h3')[0].lastChild.data;
            const time = event.target.querySelectorAll('h4')[0].firstChild.data;
            console.log(name,time);
        }
    }, []);

    const handleSubmit = useCallback((event:any) => {
        event.preventDefault();
        if (list.find(el => el.title === event.target.elements.name.value)) {
            alert("Erro! conteúdo já existe na lista!")
        } else {
            const newData = {
                title: event.target.elements.name.value,
                className: event.target.elements.icon.value,
                description: event.target.elements.time.value
            }
            setList([...list, newData]);
        }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleDelete = useCallback((event:any) => {
        const test = [document.querySelectorAll('ul')[1]];
        for (let i = 0; i < test[0].children.length; i ++) {
            if (test[0].children[i].id === event.target.id) {
                console.log(test[0].children[i]);
            }
        }
        event.preventDefault();
        //setList(list.filter(el => el.title !== event.target.elements.name.value));
    }, []);

    return (
        <>
            <StyledContainer>
                <ContentView>
                    <StyledForm action="/lista" onSubmit={handleSubmit}>
                        <Input required label="Estudo: " type="text" id="name" name="study_name" placeholder="O que você quer estudar?"/>
                        <Input required label="Ícone: " type="text" id="icon" name="icon" placeholder="Classe devicon do icone"/>
                        <Input required label="Tempo: " type="time" id="time" name="time" />
                        <StyledFooter>
                        <Button>Submit</Button>
                        </StyledFooter>
                    </StyledForm>
                    <List title="Estudos do dia" list={list} onClickItem={handleClickItem} onDelete={handleDelete}/>
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