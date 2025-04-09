// aplications, objects

let kdv = 1.2;

let customer = {
  customer1: {
    Id: 12,
    order1: {
      Id: 101,
      date: "31.12.2025",
      paymentMethod: "credicard",
      adress: "Kepez/Antalya",
      products: {
        products1: {
          Id: 5,
          name: "Iphone 16 pro",
          url: "https/abc.com",
          price: 60000,
        },
        products2: {
          Id: 6,
          name: "Iphone 16 pro max",
          url: "https/abc.com",
          price: 85000,
        },
      },
    },
    order2: {
      Id: 101,
      date: "30.12.2025",
      paymentMethod: "credicard",
      adress: "Kepez/Antalya",
      products: {
        products1: {
          Id: 6,
          name: "Iphone 17 pro max",
          url: "https/abc.com",
          price: 90000,
        },
      },
    },
  },
};

// total price

console.log(
  `order 1 produck 1: ${
    customer.customer1.order1.products.products1.price * kdv
  }`
);
console.log(
  `order 1 produck 2: ${
    customer.customer1.order1.products.products2.price * kdv
  }`
);
console.log(
  `order 2 produck 1${customer.customer1.order2.products.products1.price * kdv}`
);
console.log(
  `total ${
    (customer.customer1.order1.products.products1.price +
      customer.customer1.order1.products.products1.price +
      customer.customer1.order2.products.products1.price) *
    kdv
  }`
);
