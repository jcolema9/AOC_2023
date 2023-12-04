import { readFile } from 'fs/promises';

async function main() {
  let data = (await readFile('AOC_2023/input.txt', { encoding: 'utf8' }))
}

main()
