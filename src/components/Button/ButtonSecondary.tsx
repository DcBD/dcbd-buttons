import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonSecondary = ({id,text="Secondary button", variety = 'secondary', classNames} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames}/>
  )
}

export default ButtonSecondary
