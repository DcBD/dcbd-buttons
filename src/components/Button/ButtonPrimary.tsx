import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonPrimary = ({id,text="Primary button", variety = 'primary', classNames} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames}/>
  )
}

export default ButtonPrimary
