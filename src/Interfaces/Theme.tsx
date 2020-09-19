import Variety from "./Variety";
import Size from "./Size";
import Type from "./Type";

export default interface Theme{
  /**
   * Styles for each button variety
   */
  variety: Variety

  /**
   * Styles for button sizes
   */
  size: Size

  type: Type
}