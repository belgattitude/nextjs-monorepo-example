import React from 'react'
//import styles from "./message.module.scss";

type Props = {
  message: string
  children?: never
}

export const Message: React.FC<Props> = (props) => <span>{props.message}</span>
