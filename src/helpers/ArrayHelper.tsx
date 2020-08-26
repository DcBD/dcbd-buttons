
/**
 * Joins an array elements with a string.
 * 
 * @param array  the array to join.
 * @param glue   the glue default `" "`
 */
export function implode(array?: Array<string>, glue: string = " "): string{
  
  if (array === void 0) return "";

  return array.join(glue);
}

/**
 * Merges two arrays into one.
 * @param a1 array 1
 * @param a2 array 2
 * @param removeDuplicates  whether to remove duplicates
 */
export function merge(a1: Array<string>, a2: Array<string>, removeDuplicates: boolean = true) {
  


  let merged = [...a1, ...a2];

  // Return with preserved duplicates
  if(!removeDuplicates) return merged;

  return unique(merged);
}

/**
 * Removes duplicated values from array.
 * 
 * @param a array from where remove duplicates.
 */
export function unique(a: Array<string>): Array<string>{
  return a.filter((item, index) => a.indexOf(item) === index);
}

/**
 * Gets an array based on default values.
 * 
 * Returns an merged array with defaults. If arr is not specified the defaults will be returned.  
 * 
 * @param defaults the array of defaults.
 * @param arr the additional array that will be populated with defaults.
 */
export function defaultArray(defaults : Array<string>, arr? : Array<string>) : Array<string>{
  if (arr == void 0 || arr.length == 0) return defaults;
  else if (defaults == arr) return defaults;
  else return unique(merge(defaults, arr))
}

/**
 * Removes empty values from array.
 * 
 * @param array array from where remove empty values
 */
export function removeEmpty(array: Array<string>): Array<string>{
  return array.filter((value) => value !== void 0 )
}