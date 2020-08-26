import Variety from "./Variety";
import Size from "./Size";

export default interface Theme{
  /**
   * Styles for each button variety
   */
  variety: Variety

  /**
   * Styles for button sizes
   */
  size: Size
}