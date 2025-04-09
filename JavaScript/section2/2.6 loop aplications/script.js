let numbers = [3, 5, 7, 8, 12, 23, 45, 66];

// karesi
for (index = 0; index < numbers.length; index++) {
  console.log(numbers[index] * numbers[index]);
}

console.log("");

// 5 in katı olanlar
for (index = 0; index <= numbers.length; index++) {
  if (numbers[index] % 5 == 0) {
    console.log(numbers[index]);
  }
}

console.log("");

// x ile y arasındaki sayılar azalan şekilde ekrana yazdır
numbers = [3, 5, 7, 8, 12, 23, 45, 66];

for (let i = 0; i < numbers.length; i++) {
  if (2 <= numbers[i] && numbers[i] <= 14) {
    console.log(`Azalan: ${numbers[i]}`);
    for (let j = numbers[i]; j >= 0; j--) {
      console.log(j);
    }
  }
}

console.log("");

let product = ["elma", "armut", "muz", "çilek", "muz"];

for (let i = 0; i < product.length; i++) {
  console.log(product[i].charAt(0).toUpperCase() + product[i].slice(1));
}

console.log("");

let muzCount = product.filter((item) => item === "muz").length;
console.log(muzCount);

console.log("");

// student average calculator

let student = [
  {
    name: "name1",
    surName: "surName1",
    nots: [60, 70, 80],
  },
  {
    name: "name2",
    surName: "surName2",
    nots: [65, 60, 40, 100],
  },
  {
    name: "name3",
    surName: "surName3",
    nots: [50, 45],
  },
];

let total = 0;

for (let i = 0; i < student.length; i++) {
  let average = 0;

  for (let j = 0; j < student[i].nots.length; j++) {
    average += student[i].nots[j];
  }

  average = average / student[i].nots.length;
  total += average;

  if (average >= 70) {
    console.log(`${student[i].name} ${student[i].surName} ${average} AA`);
  } else if (average < 70 && 50 <= average) {
    console.log(`${student[i].name} ${student[i].surName} ${average} CC`);
  } else if (average < 50) {
    console.log(`${student[i].name} ${student[i].surName} ${average} FF`);
  } else {
    console.log("Hatali bilgi girişi.");
  }
}

console.log((total / student.length).toFixed(1));
