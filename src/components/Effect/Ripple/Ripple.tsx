import React, { useState } from "react"
import RippleBehaviour from "./RippleProps"
import { useSpring, animated } from "react-spring"
import styleCss from '../../../css/main.module.css'


export const Ripple = (props: RippleBehaviour) => {

  const [display, setDisplay] = useState("block");

  const rippleEffect = useSpring({from:{
    opacity: 1,
    position: "absolute",


    left: props.posX - props.startWidth / 2,
    top: props.posY - props.startWidth / 2,
    width: props.startWidth,
    height: props.startWidth,
    transform: `scale(1)`
  },
    left: props.posX - props.startWidth / 2,
    top: props.posY - props.startWidth / 2,
    opacity: 0,
    transform: `scale(15)`,
    
    config: { tension: 100 },

    onRest: () => setDisplay('none') // Hide element

    
  });


  return (
    <animated.div className={styleCss.ripple} style={{ ...rippleEffect, backgroundColor: props.color, display: display } }>

    </animated.div>
  )
}