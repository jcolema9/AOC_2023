import { readFile } from 'fs/promises';

async function main() {
  let data = (await readFile('AOC_2023/input.txt', { encoding: 'utf8' }))

  let cards = data.split("\r\n").map(i => i.split(": ")[1])

  let result = cards.map(i => {
    let winners = new Set([i.split(" | ")[0]])
    let numbers = new Set([i.split(" | ")[1]])

    let results = winners.split(" ").map(i => {
      return numbers.includes(i)
    })
  
    return numbers.intersection(winners)
    //return results.filter(i => i == true).length
  })

  console.log(result)

}

main()
