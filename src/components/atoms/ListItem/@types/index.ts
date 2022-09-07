export type TListItemProps = {
    title: string;
    description?: string;
    className: string;
    listId: any;
    onClick?: (event:any) => void;
    onDelete?: (event:any) => void;
}