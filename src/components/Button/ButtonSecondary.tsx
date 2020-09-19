import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonSecondary = ({id, type = 'contained',text="Secondary button", variety = 'secondary', classNames, size, children} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames} size={size} children={children} type={type}/>
  )
}

export default ButtonSecondary
