// student 1
var student1Name = "Hanna";
var student1DateOfBirdh = 2012;
var student1MathNotes1 = 70;
var student1MathNotes2 = 70;
var student1MathNotes3 = 80;

// student 2
var student2Name = "Jhonna";
var student2DateOfBirdh = 2010;
var student2MathNotes1 = 40;
var student2MathNotes2 = 40;
var student2MathNotes3 = 50;

var student1Old = 2025 - student1DateOfBirdh;
var student2Old = 2025 - student2DateOfBirdh;

var student1AvarageNotes =
  (student1MathNotes1 + student1MathNotes2 + student1MathNotes3) / 3;
var student2AvarageNotes =
  (student2MathNotes1 + student2MathNotes2 + student2MathNotes3) / 3;

var student1Statuss = student1AvarageNotes >= 50;
var student2Statuss = student2AvarageNotes >= 50;

console.log(student1Name + " " + student1Old + " " + student1Statuss);
console.log(student2Name + " " + student2Old + " " + student2Statuss);
