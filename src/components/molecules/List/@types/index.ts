export type TListProps = {
    list: any;
    title?: string;
    onClickItem: (event:any) => void;
    onDelete?: (event:any) => void;
}