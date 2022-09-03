import { StyledListItem,Title,Description,Icon } from './styles';
import { TListItemProps } from './@types';

export default function ListItem(props:TListItemProps) {
    return(
       <>
            <StyledListItem>
                <Title>
                    <Icon className={props.className}></Icon>
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