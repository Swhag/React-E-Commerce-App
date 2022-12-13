import bg from '../images/bg.png';
import shoes1 from '../images/shoes1.jpg';
import shoes2 from '../images/shoes2.jpg';
import shoes3 from '../images/shoes3.jpg';
import shoes4 from '../images/shoes4.PNG';
import shoes5 from '../images/shoes5.PNG';
import shoes6 from '../images/shoes6.PNG';

let shoesImage = [shoes1, shoes2, shoes3, shoes4, shoes5, shoes6];

let shoesData = [
  {
    id: 0,
    title: 'White and Black',
    content: 'Made in France',
    price: 70,
  },

  {
    id: 1,
    title: 'Red Knit',
    content: 'Made in Seoul',
    price: 110,
  },

  {
    id: 2,
    title: 'Gray Jordan',
    content: 'Made in USA',
    price: 130,
  },
];

export { bg, shoesImage, shoesData };
