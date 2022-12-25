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
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';

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

let shoesData = [
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

export { shoesImage, shoesData, banner3, categoryImage };
