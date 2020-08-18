import React from "react";

type Props = {
    message: string;
    children?: never;
}

export const Message: React.FC<Props> = (props) => <span>{props.message}</span>;

