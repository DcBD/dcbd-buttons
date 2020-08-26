import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import { Button } from './Button'


const ButtonSuccess = ({id,text="Success button", variety = 'success', classNames} : ButtonProps) => {

  return (
    <Button id={id} text={text} variety={variety} classNames={classNames}/>
  )
}

export default ButtonSuccess
