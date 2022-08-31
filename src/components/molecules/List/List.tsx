import { StyledList,Title} from './styles';
import { TListProps } from './@types';
import ListItem from '@/components/atoms/ListItem/ListItem';

export default function List(props:TListProps) {
    return(
       <>
            <StyledList>
                {
                    props.title ? 
                    (
                    <Title>
                        {props.title}
                    </Title>
                    ) : <></>

                }
                {
                    props.list.map((el:any,key:number) => {return <ListItem key={key} title={el.title} description={el.description}/>})
                }
            </StyledList>
       </>
    )
}