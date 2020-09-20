import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonSuccess = ({id,icon, type = 'contained',text="Success button", variety = 'success', classNames, size, children} : ButtonProps) => {

  return (
    <Button id={id} icon={icon} text={text} variety={variety} classNames={classNames} size={size} children={children} type={type}/>
  )
}

export default ButtonSuccess
