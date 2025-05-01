const products = [
  {
    name: "Baby Camera Outfit Set",
    description: "Adorable baby outfit with camera-themed design.",
    price: 19.99,
    image:
      "https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251516.jpg",
    images: [
      "https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251516.jpg",
    ],
    stock: 30,
    category: "Baby Clothes",
    prescriptionRequired: false,
  },
  {
    name: "It's a Girl Newborn Set",
    description: "Celebrate your baby girl with this sweet newborn outfit.",
    price: 22.5,
    image:
      "https://img.freepik.com/free-photo/objects-showing-its-girl-expectancy_23-2150166724.jpg",
    images: [
      "https://img.freepik.com/free-photo/objects-showing-its-girl-expectancy_23-2150166724.jpg",
    ],
    stock: 25,
    category: "Newborn",
    prescriptionRequired: false,
  },
  {
    name: "Girls' Casual Outfit",
    description: "Comfortable everyday clothes for girls with a stylish touch.",
    price: 18.75,
    image:
      "https://img.freepik.com/free-photo/female-clothes_23-2147790635.jpg",
    images: [
      "https://img.freepik.com/free-photo/female-clothes_23-2147790635.jpg",
    ],
    stock: 40,
    category: "Girls' Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Pink Bodysuit Set",
    description: "Elegant pink bodysuit and accessories for baby girls.",
    price: 24.99,
    image:
      "https://img.freepik.com/premium-photo/little-girls-clothes-suit-bodysuit-hat-pink-shoes-fashion-children_427050-203.jpg",
    images: [
      "https://img.freepik.com/premium-photo/little-girls-clothes-suit-bodysuit-hat-pink-shoes-fashion-children_427050-203.jpg",
    ],
    stock: 35,
    category: "Girls' Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Child Fashion Essentials",
    description: "Trendy outfit set for young children.",
    price: 26.0,
    image:
      "https://img.freepik.com/premium-photo/baby-clothes-concept-child-fashion-flat-lay-childrens-clothing-accessories_494619-703.jpg",
    images: [
      "https://img.freepik.com/premium-photo/baby-clothes-concept-child-fashion-flat-lay-childrens-clothing-accessories_494619-703.jpg",
    ],
    stock: 20,
    category: "Unisex",
    prescriptionRequired: false,
  },
  {
    name: "Neutral Toned Baby Outfit",
    description: "Stylish pastel baby outfit for all genders.",
    price: 20.5,
    image:
      "https://img.freepik.com/premium-photo/cute-gender-neutral-baby-clothes-knitted-jumpsuit-sweater-kids-sunglasses-socks-warm-hat-stylish-elegant-neutral-pastel-colours-newborn-baby-clothes-accessories-flat-lay-top-view_408798-11688.jpg",
    images: [
      "https://img.freepik.com/premium-photo/cute-gender-neutral-baby-clothes-knitted-jumpsuit-sweater-kids-sunglasses-socks-warm-hat-stylish-elegant-neutral-pastel-colours-newborn-baby-clothes-accessories-flat-lay-top-view_408798-11688.jpg",
    ],
    stock: 28,
    category: "Baby Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Casual Clothing & Shoes Set",
    description: "All-in-one stylish and casual outfit with matching shoes.",
    price: 31.75,
    image:
      "https://img.freepik.com/premium-photo/high-angle-view-casual-clothing-shoes-hardwood-floor_1048944-9609348.jpg",
    images: [
      "https://img.freepik.com/premium-photo/high-angle-view-casual-clothing-shoes-hardwood-floor_1048944-9609348.jpg",
    ],
    stock: 18,
    category: "Unisex",
    prescriptionRequired: false,
  },
  {
    name: "Neutral Romper Set",
    description: "Soft and cozy rompers perfect for all babies.",
    price: 23.0,
    image:
      "https://img.freepik.com/premium-photo/set-baby-rompers-knitted-jumper-white-bed-gender-neutral-baby-clothes-accessories-flat-lay-top-view_479776-4228.jpg",
    images: [
      "https://img.freepik.com/premium-photo/set-baby-rompers-knitted-jumper-white-bed-gender-neutral-baby-clothes-accessories-flat-lay-top-view_479776-4228.jpg",
    ],
    stock: 50,
    category: "Unisex",
    prescriptionRequired: false,
  },
  {
    name: "Classic Dummy Clothes",
    description: "Retro-style baby outfit with comfortable fabric.",
    price: 17.99,
    image:
      "https://img.freepik.com/free-photo/dummy-cloth-children_23-2147698769.jpg",
    images: [
      "https://img.freepik.com/free-photo/dummy-cloth-children_23-2147698769.jpg",
    ],
    stock: 42,
    category: "Baby Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Soft Pink Baby Outfit",
    description: "Gentle pink tones perfect for newborn girls.",
    price: 21.25,
    image:
      "https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251466.jpg",
    images: [
      "https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251466.jpg",
    ],
    stock: 33,
    category: "Girls' Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Romper with Hat & Headband",
    description: "Complete baby girl fashion set with accessories.",
    price: 27.49,
    image:
      "https://img.freepik.com/premium-photo/set-baby-rompers-hat-hairband-knitted-jumper-white-bed-fashion-baby-clothes-accessories-flat-lay-top-view_479776-4218.jpg",
    images: [
      "https://img.freepik.com/premium-photo/set-baby-rompers-hat-hairband-knitted-jumper-white-bed-fashion-baby-clothes-accessories-flat-lay-top-view_479776-4218.jpg",
    ],
    stock: 29,
    category: "Girls' Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Classic Dummy Clothes",
    description: "Retro-style baby outfit with comfortable fabric.",
    price: 17.99,
    image:
      "https://img.freepik.com/free-photo/dummy-cloth-children_23-2147698769.jpg",
    images: [
      "https://img.freepik.com/free-photo/dummy-cloth-children_23-2147698769.jpg",
    ],
    stock: 42,
    category: "Baby Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Soft Pink Baby Outfit",
    description: "Gentle pink tones perfect for newborn girls.",
    price: 21.25,
    image:
      "https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251466.jpg",
    images: [
      "https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251466.jpg",
    ],
    stock: 33,
    category: "Girls' Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Romper with Hat & Headband",
    description: "Complete baby girl fashion set with accessories.",
    price: 27.49,
    image:
      "https://img.freepik.com/premium-photo/set-baby-rompers-hat-hairband-knitted-jumper-white-bed-fashion-baby-clothes-accessories-flat-lay-top-view_479776-4218.jpg",
    images: [
      "https://img.freepik.com/premium-photo/set-baby-rompers-hat-hairband-knitted-jumper-white-bed-fashion-baby-clothes-accessories-flat-lay-top-view_479776-4218.jpg",
    ],
    stock: 29,
    category: "Girls' Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Classic Dummy Clothes",
    description: "Retro-style baby outfit with comfortable fabric.",
    price: 17.99,
    image:
      "https://img.freepik.com/free-photo/dummy-cloth-children_23-2147698769.jpg",
    images: [
      "https://img.freepik.com/free-photo/dummy-cloth-children_23-2147698769.jpg",
    ],
    stock: 42,
    category: "Baby Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Soft Pink Baby Outfit",
    description: "Gentle pink tones perfect for newborn girls.",
    price: 21.25,
    image:
      "https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251466.jpg",
    images: [
      "https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251466.jpg",
    ],
    stock: 33,
    category: "Girls' Clothes",
    prescriptionRequired: false,
  },
  {
    name: "Romper with Hat & Headband",
    description: "Complete baby girl fashion set with accessories.",
    price: 27.49,
    image:
      "https://img.freepik.com/premium-photo/set-baby-rompers-hat-hairband-knitted-jumper-white-bed-fashion-baby-clothes-accessories-flat-lay-top-view_479776-4218.jpg",
    images: [
      "https://img.freepik.com/premium-photo/set-baby-rompers-hat-hairband-knitted-jumper-white-bed-fashion-baby-clothes-accessories-flat-lay-top-view_479776-4218.jpg",
    ],
    stock: 29,
    category: "Girls' Clothes",
    prescriptionRequired: false,
  },
];
export default products;
