import shoes1 from '../images/shoes1.jpg';
import shoes2 from '../images/shoes2.jpg';
import shoes3 from '../images/shoes3.jpg';
import shoes4 from '../images/shoes4.PNG';
import shoes5 from '../images/shoes5.PNG';
import shoes6 from '../images/shoes6.PNG';
import shoes7 from '../images/shoes7.PNG';
import shoes8 from '../images/shoes8.PNG';
import shoes9 from '../images/shoes9.PNG';

import banner from '../images/banner.jpg';

import casual from '../images/casual.jpg';
import sports from '../images/sports.jpg';
import shoesModel from '../images/shoes-model.jpg';
import shoesModel1 from '../images/shoes-model1.jpg';
import shoesModel2 from '../images/shoes-model2.jpg';
import shoesModel3 from '../images/shoes-model3.jpg';
import shoesModel4 from '../images/shoes-model4.jpg';
import shoesModel5 from '../images/shoes-model5.jpg';

let shoesImage = [
  shoes1,
  shoes2,
  shoes3,
  shoes4,
  shoes5,
  shoes6,
  shoes7,
  shoes8,
  shoes9,
];

let categoryImage = [
  casual,
  sports,
  shoesModel,
  shoesModel1,
  shoesModel2,
  shoesModel3,
  shoesModel4,
  shoesModel5,
];

let trendingOne = [
  {
    id: 53,
    name: "AF1 Low 'Have a Nike Day'",
    brand: 'NIKE',
    gender: 'MEN',
    category: 'CASUAL',
    price: 100,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/019/367/662/original/484799_00.png.png',
    slug: 'air-force-1-low-gs-have-a-nike-day-white-af1-gs-hand-wht',
    limited: true,
  },
  {
    id: 54,
    name: "AF1 '07 Low 'University Blue'",
    brand: 'NIKE',
    gender: 'MEN',
    category: 'CASUAL',
    price: 90,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/018/898/008/original/482531_00.png.png',
    slug: 'air-force-1-07-low-university-blue-ao2423-100',
    limited: true,
  },
  {
    id: 55,
    name: "AF1 '07 'White'",
    brand: 'NIKE',
    gender: 'MEN',
    category: 'CASUAL',
    price: 90,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/010/222/352/original/240_00.png.png',
    slug: 'nike-air-force-1-315122-111',
    limited: true,
  },
  {
    id: 56,
    name: "Air Max 97 'All Star Jersey'",
    brand: 'NIKE',
    gender: 'MEN',
    category: 'CASUAL',
    price: 160,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/021/562/245/original/480142_00.png.png',
    slug: 'air-max-97-game-royal-921826-404',
    limited: true,
  },
  {
    id: 79,
    name: "NMD_R1 'Speckle Pack - White'",
    brand: 'ADIDAS',
    gender: 'MEN',
    category: 'CASUAL',
    price: 130,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/020/249/956/original/EF3326.png.png',
    slug: 'nmd_r1-speckle-pack-white-ef3326',
    limited: true,
  },
  {
    id: 80,
    name: "Yeezy 'Butter'",
    brand: 'ADIDAS',
    gender: 'MEN',
    category: 'CASUAL',
    price: 220,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/012/598/505/original/348063_00.png.png',
    slug: 'yeezy-boost-350-v2-ice-yellow-f36980',
    limited: true,
  },
  {
    id: 81,
    name: "Yeezy 'Semi Frozen Yellow'",
    brand: 'ADIDAS',
    gender: 'MEN',
    category: 'CASUAL',
    price: 220,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/016/928/118/original/155573_00.png.png',
    slug: 'yeezy-boost-350-v2-b37572',
    limited: true,
  },
  {
    id: 82,
    name: "NMD_R1 'Blizzard'",
    brand: 'ADIDAS',
    gender: 'MEN',
    category: 'RUNNING',
    price: 130,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/011/292/904/original/298048_00.png.png',
    slug: 'nmd_r1-blizzard-b79759',
    limited: true,
  },
];

let trendingTwo = [
  {
    id: 0,
    name: 'White and Black',
    brand: 'NOBRAND',
    price: 70,
    gender: 'MEN',
    category: 'CASUAL',
    imageURL:
      'https://raw.githubusercontent.com/Swhag/store-app-project/main/src/images/shoes1.jpg',
  },

  {
    id: 1,
    name: 'Red Knit',
    brand: 'NOBRAND',
    price: 110,
    gender: 'MEN',
    category: 'CASUAL',
    imageURL:
      'https://raw.githubusercontent.com/Swhag/store-app-project/main/src/images/shoes2.jpg',
  },

  {
    id: 2,
    name: 'Gray Jordan',
    brand: 'AIR JORDAN',
    price: 130,
    gender: 'MEN',
    category: 'CASUAL',
    imageURL:
      'https://raw.githubusercontent.com/Swhag/store-app-project/main/src/images/shoes3.jpg',
  },
  {
    id: 3,
    name: 'Vans Fresh',
    brand: 'VANS',
    price: 50,
    gender: 'MEN',
    category: 'CASUAL',
    imageURL:
      'https://raw.githubusercontent.com/Swhag/store-app-project/main/src/images/shoes4.PNG',
  },

  {
    id: 4,
    name: 'FitVille Runner',
    brand: 'FitVille',
    price: 65,
    gender: 'WOMEN',
    category: 'CASUAL',
    imageURL:
      'https://raw.githubusercontent.com/Swhag/store-app-project/main/src/images/shoes5.PNG',
  },

  {
    id: 5,
    name: 'Adidas Originals',
    brand: 'ADIDAS',
    price: 80,
    gender: 'WOMEN',
    category: 'CASUAL',
    imageURL:
      'https://raw.githubusercontent.com/Swhag/store-app-project/main/src/images/shoes6.PNG',
  },
  {
    id: 6,
    name: 'Lite Racer',
    brand: 'NOBRAND',
    price: 60,
    gender: 'WOMEN',
    category: 'CASUAL',
    imageURL:
      'https://raw.githubusercontent.com/Swhag/store-app-project/main/src/images/shoes7.PNG',
  },

  {
    id: 7,
    name: 'Afterburner 8 Turf',
    brand: 'NOBRAND',
    price: 85,
    gender: 'WOMEN',
    category: 'CASUAL',
    imageURL:
      'https://raw.githubusercontent.com/Swhag/store-app-project/main/src/images/shoes8.PNG',
  },
];

export { shoesImage, trendingOne, trendingTwo, banner, categoryImage };
