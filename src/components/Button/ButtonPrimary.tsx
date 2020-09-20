import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonPrimary = ({id, icon, type = 'contained', text="Primary button", variety = 'primary', classNames, size, children} : ButtonProps) => {

  return (
    <Button id={id} icon={icon} text={text} variety={variety} classNames={classNames} size={size} children={children} type={type}/>
  )
}

export default ButtonPrimary
