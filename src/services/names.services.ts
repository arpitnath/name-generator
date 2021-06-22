export const generateRandomNames = (arr: string[]): string[] => {
  if (arr.length === 0) {
    return ['Error']
  }
  const randomNames: string[] = []
  const names = new Map()
  const maxLimit = 5

  while (names.size < 5) {
    let index = Math.ceil(Math.random() * maxLimit)

    if (!names.get(index)) {
      index = Math.ceil(Math.random() * (arr.length - 1))
      names.set(index, arr[index])
    }
  }
  names.forEach((name) => randomNames.push(name))
  return randomNames
}

export const checkOriginOfNames = (
  generatedRandomNames: string[],
  inputList: string[]
): boolean => {
  const randomNames = generatedRandomNames

  for (let i of randomNames) {
    let check = inputList.includes(i)

    if (!check) return false
  }
  return true
}
