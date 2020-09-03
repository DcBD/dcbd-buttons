import React, {MouseEvent} from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import {defaultArray, implode} from "../../helpers/ArrayHelper"
import { getThemeClasses } from "../../helpers/ThemeHelper"
import style from '../../css/main.module.css'
import { animated} from 'react-spring'

export const AnimatedButton = ({ id, text = "Animated Button", variety = 'default', classNames, size = 'md', children,onClick,disabled,styleTag}: ButtonProps) => {


  let theme_classes = getThemeClasses({varieties: ["default", variety], size: size})

  let merged_classes = defaultArray(theme_classes, classNames);

  if (disabled) merged_classes.push(style.disabled);

  var handleClick = (event: MouseEvent<HTMLElement>) : void => {

    if(onClick !== void 0) onClick(event);
    
  }

  return (
    <animated.span id={id} className={implode(merged_classes)} onClick={handleClick} style={styleTag}>
      {text} {children}
    </animated.span>
  )
}


