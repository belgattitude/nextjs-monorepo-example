import React from "react";
//import styles from "./message.module.scss";

type Props = {
    borderColor?: string;
    message: string;
    children?: never;
}

const defaultProps = {
    borderColor: 'red',
}

export const Message: React.FC<Props> = (props) => {
    const {borderColor} = {...defaultProps, ...props};
    return (
        <div style={{display: 'inline-block', border: `1px solid ${borderColor}`}}>{props.message}</div>
    );
}

