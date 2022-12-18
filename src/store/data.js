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
    content: 'Made in France',
    price: 70,
  },

  {
    id: 1,
    name: 'Red Knit',
    content: 'Made in Seoul',
    price: 110,
  },

  {
    id: 2,
    name: 'Gray Jordan',
    content: 'Made in USA',
    price: 130,
  },
  {
    id: 3,
    name: 'Vans Fresh',
    content: 'Made in Germany',
    price: 50,
  },

  {
    id: 4,
    name: 'FitVille Runner',
    content: 'Made in USA',
    price: 65,
  },

  {
    id: 5,
    name: 'Adiddas Originals',
    content: 'Made in USA',
    price: 80,
  },
  {
    id: 6,
    name: 'Lite Racer',
    content: 'Made in Germany',
    price: 60,
  },

  {
    id: 7,
    name: 'Afterburner 8 Turf',
    content: 'Made in USA',
    price: 85,
  },
];

export { shoesImage, shoesData, banner3, categoryImage };
