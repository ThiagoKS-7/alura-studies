import { StyledListItem,Title,Description,Icon, DeleteIconContainer, DeleteIcon } from './styles';
import { TListItemProps } from './@types';

export default function ListItem(props:TListItemProps) {
    return(
       <>
            <StyledListItem id={props.listId} onClick={props.onClick}>
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
                <DeleteIconContainer onClick={props.onDelete}>
                    <DeleteIcon  id={props.listId}  className="material-symbols-outlined">
                        delete
                    </DeleteIcon>
                </DeleteIconContainer>
            </StyledListItem>
       </>
    )
}