// Zavdanya 1
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Zavdanya 2
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Zavdanya 3
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// Zavdanya 4
let n = 20;
for (let i = 1; ; i++) {
    if (i >= n) {
        break;
    }
    console.log(i);
}
// Zavdanya 5
// let i = 1;

// while (i <= 20) {
// if (i % 3 === 0) {
//     i++;
//     continue;
//     }

// console.log(i);
// i++;
// }