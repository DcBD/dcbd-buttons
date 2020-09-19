import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonDanger = ({id,type = 'contained', text="Danger button", variety = 'danger', classNames, size, children} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames} size={size} children={children} type={type}/>
  )
}

export default ButtonDanger
