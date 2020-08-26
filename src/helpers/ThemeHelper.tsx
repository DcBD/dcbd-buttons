import Theme from "../interfaces/Theme";
import { DefaultTheme } from "../cfg/DefaultTheme"
import { unique, merge } from "./ArrayHelper"

import ThemeOptions from "../Interfaces/ThemeOptions";

/**
 * Gets varieties classes.
 * @param varieties the button varieties.
 * @param theme the theme from where classes will be taken.
 */
export const getVarietiesClasses = (varieties : Array<string>, theme : Theme) : Array<string> =>{

  let classes : Array<string> = [];

  varieties.map((type) => {
    let className : Array<string> = theme?.variety[type];

    if (className !== void 0) {classes = merge(className, classes);}
  });

  return classes;
}


/**
 * Gets classes to apply.
 * 
 * @param options theme options
 * @param theme the theme to apply if empty the default theme fill be applied
 */
export const getThemeClasses = (options : ThemeOptions,theme? : Theme) =>{
  if (theme === void 0) theme = DefaultTheme;


  options.varieties = unique(options.varieties); // Remove duplicates

  let varietyClasses = getVarietiesClasses(options.varieties, theme); // Button varieties

  let sizeClasses = theme.size[options.size] || []; // Button sizes

  let classes: Array<string> = [...varietyClasses, ...sizeClasses];
  
  return classes
}



