import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonDanger = ({id,text="Danger button", variety = 'danger', classNames} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames}/>
  )
}

export default ButtonDanger
