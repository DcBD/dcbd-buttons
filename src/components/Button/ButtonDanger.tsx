import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonDanger = ({id,text="Danger button", variety = 'danger', classNames, size, children} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames} size={size} children={children}/>
  )
}

export default ButtonDanger
