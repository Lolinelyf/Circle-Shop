const BASE_URL = import.meta.env.BASE_URL;

const saleItems = [
  {
    id: 1,
    name: 'Свитер унисекс',
    price: 3_100,
    image: BASE_URL + 'images/sale_items/s4-1.png',
    sale: 30,
  },
  {
    id: 2,
    name: 'Свитер женский',
    price: 4_200,
    image: BASE_URL + 'images/sale_items/s4-2.png',
    sale: 30,
  },
  {
    id: 3,
    name: 'Пальто',
    price: 3_100,
    image: BASE_URL + 'images/sale_items/s4-3.png',
    sale: 30,
  },
  {
    id: 4,
    name: 'Футболка',
    price: 2_400,
    image: BASE_URL + 'images/sale_items/s4-4.png',
    sale: 30,
  },
];

export function getSaleItems() {
  return saleItems;
}

export function getSaleItemById(id) {
  return saleItems.find((item) => item.id === id);
}
