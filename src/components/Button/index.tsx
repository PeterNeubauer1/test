import React from 'react'
import { ButtonProps } from "./interface"
import './style.css'

export const Button: React.FC<ButtonProps> = ({children, className = "", onClick}) => {
    var className_ = className === 'add' ? 'add' :
        className === 'reduce' ? 'reduce' :
        className === 'nextPage' ? 'nextPage' : 
        className === 'prevPage' ? 'prevPage' : ""
    return (
        <button className={className_} onClick={onClick}>{children}</button>
    )
}