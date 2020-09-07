import React from "react"
import RippleBehaviour from "./RippleProps"
import { useSpring, animated } from "react-spring"
import styleCss from '../../../css/main.module.css'


export const Ripple = (props: RippleBehaviour) => {

  // const toSize : number = 200; 

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
    transform: `scale(100)`,

    config: { tension: 25 }
    
  });


  return (
    <animated.div  className={styleCss.ripple} style={{...rippleEffect, backgroundColor:props.color}}>

    </animated.div>
  )
}