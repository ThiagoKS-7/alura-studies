import { ListContainer, StyledList,Title} from './styles';
import { TListProps } from './@types';
import ListItem from '@/components/atoms/ListItem/ListItem';

export default function List(props:TListProps) {
    return(
       <ListContainer>
            {
                props.title ? 
                (
                <Title>
                    {props.title}
                </Title>
                ) : <></>
            }
            <StyledList>
                {
                    props.list.map((el:any,key:number) => {return <ListItem key={key} className={el.className} title={el.title} description={el.description}/>})
                }
            </StyledList>
       </ListContainer>
    )
}