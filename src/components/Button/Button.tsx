import React, {MouseEvent, useState} from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import {defaultArray, implode} from "../../helpers/ArrayHelper"
import {getRelativePosition, getBackgroundColor} from "../../helpers/uiHelper"
import { getThemeClasses } from "../../helpers/ThemeHelper"
import style from '../../css/main.module.css'
import { Ripple } from "../Effect"


export const Button = ({ id, type = 'contained', text = "Button", variety = 'default', classNames, size = 'md', children,onClick,disabled}: ButtonProps) => {

  const [ripple, setRipple] = useState(<span></span>) ;
  

  let theme_classes = getThemeClasses({varieties: ["default", variety], size: size, type: type})

  let merged_classes = defaultArray(theme_classes, classNames);

  if (disabled) merged_classes.push(style.disabled);

  var createRipple = (x: number, y: number, width: number, color: string) => {


    let rippleEffect = <Ripple color={color} key={(Math.random() * x * y)} posX={x} posY={y} startWidth={width / 8}/>

    setRipple(rippleEffect);

  }

  var handleClick = (event: MouseEvent<HTMLElement>) : void => {

    if(onClick !== void 0) onClick(event);
  }

  var handleMouseDown = (event: MouseEvent<HTMLElement>): void =>{
    let color = getBackgroundColor(event);

    let position = getRelativePosition(event);
    createRipple(position.x, position.y,position.w, `RGBA(${(color.R - 50)},${(color.G - 50)},${(color.B - 50)},0.5)`);    
  }




  return (
    <span id={id} className={implode(merged_classes)} onClick={handleClick} onMouseDown={handleMouseDown}>
      {text} {children} {ripple}
    </span>
  )
}


