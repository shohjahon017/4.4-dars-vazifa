// For ga oid masalalar
//1-masala
// let sum = 0;
// for (let i = 10; i <= 100; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }
// console.log(sum);

//2-masala
// let num = +prompt("Sonni kiriting");
// let p = 1;
// for (let i = 1; i <= num; i++) {
//   p *= i;
// }
// console.log(p);

//4-masala
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//   sum += i ** 2;
// }
// console.log(sum);

//5-masala
// for (let i = 0; i <= 5; i++) {
//   let max;
//   let min;
//   let num = +prompt(`Sonni kiriting ${i + 1}`);

// }
// console.log(max, min);

//7-masala
// const num = +prompt("Raqamni kiriting");
// let reverse = 0;
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//   const l = i % 10;
//   reverse = reverse * 10 + l;
// }
// console.log(reverse);

//8-masala
// let juft = 0;
// let toq = 0;
// let res = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     juft += i ** 2;
//   } else {
//     toq += i ** 3;
//   }
//   res = juft - toq;
// }
// console.log(res);

//9-masala
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//   }
// }

//10-masala
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// const ortacha = sum / 100;
// console.log(ortacha);

//11-masala
// let num = +prompt("Sonni kiriting");
// let raqam = 0;
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//   raqam++;
// }
// console.log(raqam);

//14-masala
let sum = 0;
for (let i = 1; i <= 200; i++) {
  sum += i;
}
console.log(sum);

//Break/continue ga oid masalalar.
//1-masala
// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }

//2-masala
// for (let i = 1; i <= 10; i++) {
//   if (i == 3) {
//     continue;
//   }
//   if (i == 7) {
//     continue;
//   }
//   console.log(i);
// }

//3-masala
// let num = +prompt("Sonni  kiriting");
// for (let i = 1; i <= num; i++) {
//   if ((num = 7)) {
//     console.log("Topildi");
//     break ;
//   }
// }

//4-masala
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

//5-masala
// for (let i = 1; i <= 100; i++) {
//   if (i > 50) {
//     break;
//   }
//   console.log(i);
// }
