function flatten(obj) {
  const reduceConcat = (prev, curr) =>
    prev.concat(
      Array.isArray(curr) || typeof curr === 'object'
      ? flatten(curr)
      : curr
    )

  if (Array.isArray(obj)) {
    return obj.reduce(reduceConcat, [])
  }

	if (typeof obj === 'object') {
    const asArray = []

    for (let key in obj) {
      const flatItem = flatten(obj[key])

      if (Array.isArray(flatItem)) {
        flatItem.forEach((el, i) => {
          asArray.push(flatItem[i])
        })
      } else {
        asArray.push(flatItem)
      }
    }

    return asArray
	}

	return obj
}
