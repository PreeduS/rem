
export interface ComponentAction<TProps> {
    (props: TProps): JSX.Element;
}
