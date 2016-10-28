//Reduce to iterable the arrays
//If still an array => loop
//Else concat the previous array with the new one
export const flatten = (obj) => {
  return obj.reduce((flatted, toFlatten) => {
    return flatted.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, [])
}
