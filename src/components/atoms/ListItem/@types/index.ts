export type TListItemProps = {
    index:number;
    key:number;
    title: string;
    description?: string;
    className: string;
    onClick?: (event:any) => void;
    onDelete?: (event:any) => void;
}