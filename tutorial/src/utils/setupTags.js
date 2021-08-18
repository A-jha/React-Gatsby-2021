const setupTags = recepes => {
  const allTags = {}

  recepes.forEach(recepe => {
    recepe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  //csort tag in alphabetical order
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondtag] = b
    return firstTag.localeCompare(secondtag)
  })
  return newTags
}

export default setupTags
