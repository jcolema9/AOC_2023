import { readFile } from 'fs/promises';

async function main() {
  let data = (await readFile('AOC_2023/input.txt', { encoding: 'utf8' }))

  let games = data.split("\r\n").map(i => i.split(": ")[1])
  console.log(games)
}

main()
