import Theme from "../interfaces/Theme";
import { DefaultTheme } from "../cfg/DefaultTheme"
import { unique, merge} from "./ArrayHelper"

export const getVarietyClasses = (types : Array<string>, theme? : Theme) : Array<string> =>{

  if (theme === void 0) theme = DefaultTheme;
  
  types = unique(types);

  let classes : Array<string> = [];

  types.map((type) => {
    let className : Array<string> = theme?.variety[type];

    if (className !== void 0) {

      classes = merge(className, classes);
    }
  });

  return classes;
}