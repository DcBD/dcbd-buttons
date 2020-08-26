import Theme from "../Interfaces/Theme";
import default_theme from '../css/default.theme.css'
import style from '../css/main.module.css'

export const DefaultTheme : Theme = {
  variety: {
    default: [style.btn, default_theme.btn],
    primary: [default_theme.btn_primary],
    secondary: [default_theme.btn_secondary],
    success: [default_theme.btn_success],
    danger: [default_theme.btn_danger]
  }
} 