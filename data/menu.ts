export type MenuItem = {
  _id: string;
  title: string;
  price: string;
  description?: string;
  isHighlight?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: 'pizza',
    title: 'Pizza',
    items: [
      { _id: 'p1', title: 'Cheese Pizza', price: '99/149' },
      { _id: 'p2', title: 'Veg cheese Pizza', price: '99/149' },
      { _id: 'p3', title: 'Peri Peri veg cheese Pizza', price: '129/169' },
      { _id: 'p4', title: 'Paneer cheese Pizza', price: '149/179' },
      { _id: 'p5', title: 'Paneer tiika Pizza', price: '149/199', isHighlight: true },
      { _id: 'p6', title: 'Sweet corn cheese Pizza', price: '149/179' },
      { _id: 'p7', title: 'Baby corn cheese Pizza', price: '149/179' },
      { _id: 'p8', title: 'Mashroom cheese Pizza', price: '149/199' },
      { _id: 'p9', title: 'Double cheese Pizza', price: '179/229' },
      { _id: 'p10', title: 'Double cheese Paneer Pizza', price: '179/229' },
      { _id: 'p11', title: 'Double cheese baby corn Pizza', price: '179/229' },
      { _id: 'p12', title: 'Double cheese Mashroom Pizza', price: '179/229' },
      { _id: 'p13', title: 'Cheese burst Pizza', price: '249/349', isHighlight: true },
      { _id: 'p14', title: 'Special all toping cheese Pizza', price: '249/349' },
      { _id: 'p15', title: 'Special Cheese burst all toping Pizza', price: '299/399', isHighlight: true },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    items: [
      { _id: 'b1', title: 'Veg burger', price: '59' },
      { _id: 'b2', title: 'Schezwan burger', price: '59' },
      { _id: 'b3', title: 'Paneer burger', price: '79' },
      { _id: 'b4', title: 'cheese burger', price: '79' },
      { _id: 'b5', title: 'sweet corn burger', price: '79' },
      { _id: 'b6', title: 'Paneer Cheese burger', price: '99', isHighlight: true },
      { _id: 'b7', title: 'Sweet corn cheese burger', price: '99' },
      { _id: 'b8', title: 'Double cheese burger', price: '119' },
      { _id: 'b9', title: 'Double cheese paneer burger', price: '149', isHighlight: true },
      { _id: 'b10', title: 'Double cheese sweet corn burger', price: '149' },
      { _id: 'b11', title: 'Special burger', price: '149', isHighlight: true },
    ],
  },
  {
    id: 'sandwich',
    title: 'Sandwich',
    items: [
      { _id: 's1', title: 'Veg grill Sandwich', price: '59' },
      { _id: 's2', title: 'Paneer grill Sandwich', price: '89' },
      { _id: 's3', title: 'Sweet corn Sandwich', price: '89' },
      { _id: 's4', title: 'Cheese grill Sandwich', price: '89' },
      { _id: 's5', title: 'Chocolate Sandwich', price: '99' },
      { _id: 's6', title: 'Double cheese Veg Sandwich', price: '119' },
      { _id: 's7', title: 'Double cheese sweet corn Sandwich', price: '129' },
      { _id: 's8', title: 'Double cheese Paneer sandwich', price: '129', isHighlight: true },
      { _id: 's9', title: 'Special Sandwich', price: '149', isHighlight: true },
    ],
  },
  {
    id: 'chinese',
    title: 'Chinese Food',
    items: [
      { _id: 'c1', title: 'Fried Rice', price: '100' },
      { _id: 'c2', title: 'Schezwan Rice', price: '100' },
      { _id: 'c3', title: 'Manchurian Rice', price: '130' },
      { _id: 'c4', title: 'Paneer Rice', price: '150' },
      { _id: 'c5', title: 'Noodles', price: '100' },
      { _id: 'c6', title: 'Hakka noodles', price: '110' },
      { _id: 'c7', title: 'Schezwan noodles', price: '130' },
      { _id: 'c8', title: 'Manchurian Noodles', price: '150' },
      { _id: 'c9', title: 'Paneer Noodles', price: '150' },
      { _id: 'c10', title: 'Manchurian', price: '100' },
      { _id: 'c11', title: 'Manchurian gravy', price: '150' },
      { _id: 'c12', title: 'Pasta', price: '150' },
      { _id: 'c13', title: 'white sauce pasta', price: '180', isHighlight: true },
      { _id: 'c14', title: 'Gobi 65', price: '130' },
      { _id: 'c15', title: 'Chilli Potato', price: '180' },
      { _id: 'c16', title: 'Paneer 65', price: '180' },
      { _id: 'c17', title: 'Paneer chilli', price: '180', isHighlight: true },
    ],
  },
  {
    id: 'momos',
    title: 'Momos',
    items: [
      { _id: 'm1', title: 'Veg Steam Momos', price: '69' },
      { _id: 'm2', title: 'Veg Fried Momos', price: '69' },
      { _id: 'm3', title: 'Veg Steam Peri Peri Momos', price: '79' },
      { _id: 'm4', title: 'Veg Fried peri peri momos', price: '79' },
      { _id: 'm5', title: 'Veg Cheese Steam Momos', price: '129' },
      { _id: 'm6', title: 'Veg Cheese Fried Momos', price: '129' },
      { _id: 'm7', title: 'Veg Cheese heese Peri Peri Steam Momos', price: '149', isHighlight: true },
      { _id: 'm8', title: 'Veg Cheese Peri Peri Fried Momos', price: '149', isHighlight: true },
    ],
  },
  {
    id: 'fries',
    title: 'Fries',
    items: [
      { _id: 'f1', title: 'Salted french fries', price: '59' },
      { _id: 'f2', title: 'Peri Peri french fries', price: '69' },
      { _id: 'f3', title: 'Potato Twister', price: '69', isHighlight: true },
    ],
  },
  {
    id: 'missal',
    title: 'Missal',
    items: [
      { _id: 'ms1', title: 'Misal', price: '69' },
      { _id: 'ms2', title: 'Misal (Unlimited)', price: '99', isHighlight: true },
    ],
  },
  {
    id: 'pavbhaji',
    title: 'Pav Bhaji',
    items: [
      { _id: 'pb1', title: 'Paav Bhaaji', price: '49' },
      { _id: 'pb2', title: 'Butter Paav Bhaaji', price: '69' },
      { _id: 'pb3', title: 'Cheese Butter Paav Bhaaji', price: '99', isHighlight: true },
      { _id: 'pb4', title: 'Paneer Butter Paav Bhaaji', price: '99' },
      { _id: 'pb5', title: 'Extra Paav', price: '10' },
      { _id: 'pb6', title: 'Extra Butter Paav', price: '20' },
    ],
  },
  {
    id: 'vadapav',
    title: 'Vadapav',
    items: [
      { _id: 'v1', title: 'Regular Vadapaav', price: '15' },
      { _id: 'v2', title: 'Grill Vadapaav', price: '20' },
      { _id: 'v3', title: 'Mayonnaise Vadapaav', price: '30' },
      { _id: 'v4', title: 'Cheese grill Vadapaav', price: '40', isHighlight: true },
      { _id: 'v5', title: 'Paties', price: '25' },
    ],
  },
  {
    id: 'beverage',
    title: 'Beverages',
    items: [
      { _id: 'bv1', title: 'cold coffee', price: '70', isHighlight: true },
      { _id: 'bv2', title: 'mango crush', price: '70' },
      { _id: 'bv3', title: 'mojito', price: '50' },
    ],
  }
];
