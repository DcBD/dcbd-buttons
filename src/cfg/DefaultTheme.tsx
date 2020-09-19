import Theme from "../Interfaces/Theme";
import default_theme from '../css/default.theme.css'
import style from '../css/main.module.css'

export const DefaultTheme: Theme = {
  
  /**
   * Button types.
   */
  type: {

    /**
     * The classes for outlined buttons.
     */
    outlined: [style.btn_outlined, default_theme.btn_outlined],

    /**
     * The classes for contained button.
     */
    contained: [style.btn_contained],

    /**
     * The classes for text button.
     */
    text: [style.btn_text],
  },

  /**
   * The button varieties.
   */
  variety: {
    /**
     * Classes for default button (other buttons inherit those classes).
     */
    default: [style.btn, default_theme.btn],

    /**
     * Primary button classes.
     */
    primary: [default_theme.btn_primary],

    /**
     * Secondary button classes.
     */
    secondary: [default_theme.btn_secondary],

    /**
     * Success button classes.
     */
    success: [default_theme.btn_success],

    /**
     * Danger button classes.
     */
    danger: [default_theme.btn_danger],

    /**
     * Save button classes.
     */
    save: [default_theme.btn_success, style.btn_save]
  },

  /**
   * The button sizes (default is md).
   */
  size: {
    /**
     * The classes that only xs button will have. (EXTRA SMALL)
     */
    xs: [style.btn_xs],

    /**
     * The classes that only sm buttons will have. (SMALL)
     */
    sm: [style.btn_sm],

    /**
     * The classes that only md buttons will have. (MEDIUM)
     */
    md: [style.btn_md],

    /**
     * The classes that only lg button will have (LARGE)
     */
    lg: [style.btn_lg],
  }

} 