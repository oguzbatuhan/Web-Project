// objects

// person, produck, comment

const produck = {
  // properties
  title: "samsung s25",
  desctiption: "güzel bir telefon",
  price: 70000,
  stock: 100,

  // methods
  display: function () {
    return `ürün başlığı ${this.title} ürün açıklaması ${this.desctiption} ürün fiyatı ${this.price}`;
  },
  is_active: function () {
    return this.stock > 0 ? "stokta" : "stokta yok";
  },
};

// rectagle => title, width, height, area calculation
const produck1 = {
  // properties
  white: 10,
  height: 5,

  // method
  display: function () {
    return `alan hesabı sonucu: ${this.is_active()}`;
  },
  is_active: function () {
    return this.white * this.height;
  },
};

// rectagle => name, surname, birtday, old calculation

console.log(produck.display());
console.log(produck.is_active());

console.log(produck1.display());
