import { readFile } from 'fs/promises';

async function main() {
  let data = (await readFile('input.txt', { encoding: 'utf8' }))
}

main()
