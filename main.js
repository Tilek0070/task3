// Задание №1
// Дан массив ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"]. Выведите в консоль имена Mirdin и Aliia с помощью цикла for
let arr = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];
for (i = 0; i < arr.length; i++) {
  if (arr[i] === "Mirdin" || arr[i] === "Aliia") {
    console.log(arr[i]);
  }
}
// Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
let arr2 = [];
for (i = 1; i <= 10; i++) {
  arr2.push(i);
}
console.log(arr2);
// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.
for (i = 50; i <= 99; i++) {
  console.log(i);
}
// Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.
for (let i = 99; i >= 50; i--) {
  console.log(i);
}

// Задание №5
// Найдите самый длинный элемент массива и выведите в консоль
// ["pen", "pineapple", "apple", "pen"]
let arr5 = ["pen", "pineapple", "apple", "pen"];
arr5.sort((a, b) => b.length - a.length);
console.log(arr5[0]);

// Задание №6
// Так же найдите самый короткий элемент этого же массива
let arr6 = ["pen", "pineapple", "apple", "pen"];
arr6.sort((a, b) => b.length - a.length);
console.log(arr6[arr6.length - 1]);

// Задание №7
// Выведите в консоль все элементы с четными индексами.
// [1,2,3,4,5,6,7,8,9]
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr7.length; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// [[1,2], [3,4], [5,6]]
let arr4 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (i of arr4) {
  for (s of i) {
    console.log(s);
  }
}
