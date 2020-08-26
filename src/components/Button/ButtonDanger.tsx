import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonDanger = ({id,text="Danger button", variety = 'danger', classNames, size} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames} size={size}/>
  )
}

export default ButtonDanger
