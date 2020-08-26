import React from "react"
import ButtonProps from "../../interfaces/ButtonProps"
import {defaultArray, implode} from "../../helpers/ArrayHelper"
import { getThemeClasses } from "../../helpers/ThemeHelper"



export const Button = ({ id, text = "Button", variety = 'default', classNames, size = 'md' }: ButtonProps) => {

  let theme_classes = getThemeClasses({varieties: ["default", variety], size: size})

  let merged_classes = defaultArray(theme_classes, classNames);



  return (
    <span id={id} className={implode(merged_classes)}>
      {text}
    </span>
  )
}


