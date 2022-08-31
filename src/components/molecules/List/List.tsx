import { StyledList,Title} from './styles';
import { TListProps } from './@types';

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
                {props.children}
            </StyledList>
       </>
    )
}