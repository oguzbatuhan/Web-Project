// constructors

function Product(title, description, price, stock) {
  // properties
  this.title = title;
  this.description = description;
  this.price = price;
  this.stock = stock;
  // method
  this.display = function () {
    return `urun basligi ${this.title}, urun aciklamasi ${this.description}, fiyat ${this.price}}`;
  };
  this.is_active = function () {
    return this.stock > 0 ? "satista" : "stokta yok";
  };
}

// object
const produck1 = new Product("samsung s21", "my phone", 20000, 100);
const produck2 = new Product("iphone", "iphone 16 pro max", 40000, 0);
const produck3 = new Product("samsung s25", "galaxy s25", 90000, 200);

console.log(produck1.display(), produck1.is_active());
console.log(produck2.display(), produck2.is_active());
console.log(produck3.display(), produck3.is_active());
