import bg from '../images/bg.png';
import shoes1 from '../images/shoes1.jpg';
import shoes2 from '../images/shoes2.jpg';
import shoes3 from '../images/shoes3.jpg';

let imageData = [shoes1, shoes2, shoes3];

let data = [
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

export default data;
export { data, bg, imageData };
