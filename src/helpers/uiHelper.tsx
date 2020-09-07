import { MouseEvent } from "react";

export const getRelativePosition = (e: MouseEvent<HTMLElement>) => {

  var target = e.currentTarget;



  var rect = target.getBoundingClientRect();
  
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.

  return { x: x, y: y, w: rect.width };
}

export const getBackgroundColor = (e : MouseEvent<HTMLElement>) => {
  var target = e.currentTarget;

  var color = getCssProperty(target, 'backgroundColor').replace(/[^,0-9]/g, "").split(',');
  
  if (color[3] === void 0) color[3] = '1';

  return {
    R: parseInt(color[0]),
    G: parseInt(color[1]),
    B: parseInt(color[2]),
    A: parseFloat((color[3])),
  };
}

export const getComputedStyle = (element : HTMLElement) : CSSStyleDeclaration =>{
  return window.getComputedStyle(element);
}

export const getCssProperty = (element: HTMLElement, property: string): string => {
  

  var computedStyle = getComputedStyle(element);

  return computedStyle[property];
}


