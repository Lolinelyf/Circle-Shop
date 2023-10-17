const categoriesItems = [
  {
    id: 1,
    name: 'Верхняя одежда',
    image: '/images/categories/s3-1.png',
  },
  {
    id: 2,
    name: 'Рубашки',
    image: '/images/categories/s3-2.png',
  },
  {
    id: 3,
    name: 'Платья',
    image: '/images/categories/s3-3.png',
  },
  {
    id: 4,
    name: 'Свитеры и толстовки',
    image: '/images/categories/s3-4.png',
  },
  {
    id: 5,
    name: 'Сумки',
    image: '/images/categories/s3-5.png',
  },
  {
    id: 6,
    name: 'Обувь',
    image: '/images/categories/s3-6.png',
  },
  {
    id: 7,
    name: 'Рубашки',
    image: '/images/categories/s3-2.png',
  },
  {
    id: 8,
    name: 'Платья',
    image: '/images/categories/s3-3.png',
  },
  {
    id: 9,
    name: 'Свитеры и толстовки',
    image: '/images/categories/s3-4.png',
  },
  {
    id: 10,
    name: 'Сумки',
    image: '/images/categories/s3-5.png',
  },
  {
    id: 11,
    name: 'Обувь',
    image: '/images/categories/s3-6.png',
  },
];

export function getCategory() {
  return categoriesItems;
}

export function getCategoryById(id) {
  return categoriesItems.find((item) => item.id === id);
}
