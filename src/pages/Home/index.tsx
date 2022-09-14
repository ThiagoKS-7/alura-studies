import React, { useEffect } from "react";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Watch from "@/components/atoms/Watch/Watch";
import List from "@/components/molecules/List/List";
import { useCallback, useState } from "react";
import { ContentView, SearchIcon, SearchIconContainer, SearchInputContainer, StyledContainer, StyledFooter, StyledForm, WatchContainer, WatchDescription } from "./styles";
import { timeToSeconds } from "@/common/time";

export default function Home() {
    const [list, setList] = useState([
        { id: 0, title: "React", className: "devicon-react-original colored", description: "1:00" },
        { id: 1, title: "Python", className: "devicon-python-plain colored", description: "1:00" },
        { id: 2, title: "Typescript", className: "devicon-typescript-plain colored", description: "1:00" },
        { id: 3, title: "Vue.js", className: "devicon-vuejs-plain colored", description: "1:30" },
        { id: 4, title: "C#", className: "devicon-csharp-plain colored", description: "1:00" },
        { id: 5, title: "Ruby", className: "devicon-ruby-plain colored", description: "1:00" },
        { id: 6, title: "Golang", className: "devicon-go-original-wordmark colored", description: "1:45" }
    ]);
    const [time, setTime] = useState({
        decHour: "0",
        hour: "0",
        decMin: "0",
        min: "0",
    });
    const [tempo, setTempo] = useState<number>();

    const handleClickItem = useCallback((event: any) => {
        if (event.target.firstChild.data !== "delete" && event.target.querySelectorAll('h3').length > 0) {
            setTime(event.target.querySelectorAll('h4')[0].firstChild.data);
            const teste = timeToSeconds(event.target.querySelectorAll('h4')[0].firstChild.data)
            setTempo(teste);
            console.log("tempo: ", teste, tempo, time);
        }
    }, []);

    const handleSubmit = useCallback((event: any) => {
        event.preventDefault();
        if (list.find(el => el.title === event.target.elements.name.value)) {
            alert("Erro! conteúdo já existe na lista!")
        } else {
            const newData = {
                id: list.length + 1,
                title: event.target.elements.name.value,
                className: event.target.elements.icon.value,
                description: event.target.elements.time.value
            }
            setList([...list, newData]);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDelete = useCallback((i: any) => {
        const newList = list.filter(el => el.id !== i);
        setList(newList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleSearch = useCallback(() => {
        window.open('https://devicon.dev');
    }, []);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
        }, 1000);
    }

    return (
        <>
            <StyledContainer>
                <ContentView>
                    <StyledForm action="/lista" onSubmit={handleSubmit}>
                        <Input required label="Estudo: " type="text" id="name" name="study_name" placeholder="O que você quer estudar?" />
                        <SearchInputContainer>
                            <Input required label="Ícone: " type="text" id="icon" name="icon" placeholder="Classe devicon do icone" />
                            <SearchIconContainer>
                                <SearchIcon className="material-symbols-outlined" onClick={handleSearch}>
                                    search
                                </SearchIcon>
                            </SearchIconContainer>
                        </SearchInputContainer>
                        <Input required label="Tempo: " type="time" id="time" name="time" />
                        <StyledFooter>
                            <Button>Submit</Button>
                        </StyledFooter>
                    </StyledForm>
                    <List title="Estudos do dia" list={list} onClickItem={handleClickItem} onDelete={handleDelete} />
                </ContentView>
                <WatchContainer>
                    <WatchDescription>
                        Escolha um card e inicie o cronômetro!
                    </WatchDescription>
                    <Watch time={tempo} />
                    <Button onClick={() => regressiva(tempo)}>Start</Button>
                </WatchContainer>
            </StyledContainer>
        </>
    )
}