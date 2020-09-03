import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonSuccess = ({id,text="Success button", variety = 'success', classNames, size, children} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames} size={size} children={children}/>
  )
}

export default ButtonSuccess
