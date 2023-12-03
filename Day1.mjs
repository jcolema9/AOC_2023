import { readFile } from 'fs/promises';

// async function main() {
//   let data = (await readFile('2023/Day1/Day1.txt', { encoding: 'utf8' }))
//   let regex = /[1-9]/g
//   let result = data
//     .split("\r\n")
//     .map(i => i
//     .match(regex))
//     .filter(i => i !== null)
//     .map(i => {
//       return Number(i[0] + i[i.length - 1]) 
//     })
//     .reduce((acc, cur) => acc += cur)
//   console.log(result)
// }

async function main() {
  let data = (await readFile('2023/Day1/Day1.txt', { encoding: 'utf8' }))
  let regex = /[1-9]/g
  let array = data.split("\r\n").map(i => {
    return i
    .replaceAll("one", "o1ne")
    .replaceAll("two", "t2wo")
    .replaceAll("three", "t3hree")
    .replaceAll("four", "f4our")
    .replaceAll("five", "f5ive")
    .replaceAll("six", "s6ix")
    .replaceAll("seven", "s7even")
    .replaceAll("eight", "e8ight")
    .replaceAll("nine", "n9ine")
    }).map(i => i.match(regex))

  let answer = array.filter(i => i !== null).map(i => {
        return Number(i[0] + i[i.length - 1]) 
        }).reduce((acc, cur) => acc += cur)

  console.log(answer)
}

main()
