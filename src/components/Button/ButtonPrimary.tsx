import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonPrimary = ({id,text="Primary button", variety = 'primary', classNames, size, children} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames} size={size} children={children}/>
  )
}

export default ButtonPrimary
