// object properties

function Rectagle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;

  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectagle("rectagle 1", 10, 5);
const rect2 = new Rectagle("rectagle 2", 20, 15);

console.log(rect1);
console.log(rect1.area());
console.log(rect2);
