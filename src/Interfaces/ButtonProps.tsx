export default interface ButtonProps{

  /**
   * Button text
   */
  text?: string

  /**
   * The button variety
   */
  variety?: string

  /**
   * The button size theme name.
   */
  size?: string

  /**
   * Button class names.
   */
  classNames?: Array<string>

  /**
   * The button id html tag.
   */
  id?: string

  /**
   * Other html tags.
   */
  tags? : object


  /**
   * On click button event.
   */
  onClick?: CallableFunction


}