import { StyledListItem,Title,Description } from './styles';
import { TListItemProps } from './@types';

export default function ListItem(props:TListItemProps) {
    return(
       <>
            <StyledListItem>
                <Title>
                    {props.title}
                </Title>
                {
                    props.description ? 
                    (   
                    <Description>
                        {props.description}
                    </Description>
                    ) : <></>
                }

            </StyledListItem>
       </>
    )
}