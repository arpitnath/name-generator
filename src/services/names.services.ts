export const generateRandomNames = (arr: string[]): string[] => {
  const randomNames = []

  const limit = 5

  for (let i = 0; i <= limit; i++) {
    const index = Math.ceil(Math.random() * 10)

    randomNames.push(arr[index])
  }

  return randomNames
}
