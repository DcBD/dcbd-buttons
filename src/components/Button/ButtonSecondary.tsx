import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonSecondary = ({id,text="Secondary button", variety = 'secondary', classNames, size} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames} size={size}/>
  )
}

export default ButtonSecondary
