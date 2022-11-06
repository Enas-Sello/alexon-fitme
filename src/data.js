import Nearby1 from './assets/Nearby1.png';
import Nearby2 from './assets/Nearby2.png';
import Nearby3 from './assets/Nearby3.png';
import Nearby4 from './assets/Nearby4.png';
import { AiFillStar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
// recommendFood
import recommendFood1 from './assets/recommendFood1.png';
import recommendFood2 from './assets/recommendFood2.png';
import recommendFood3 from './assets/recommendFood3.png';
import recommendFood4 from './assets/recommendFood4.png';
import { IoPricetagOutline } from 'react-icons/io5';

//RecommendRestaurant;
import menu1 from './assets/menu1.png';
import menu2 from './assets/menu2.png';
import menu3 from './assets/menu3.png';
import menu4 from './assets/menu4.png';
import menu5 from './assets/menu5.png';
import menu6 from './assets/menu6.png';
//RecommendRestaurant;
import personalized1 from './assets/personalized1.png';
import personalized2 from './assets/personalized2.png';
import personalized3 from './assets/personalized3.png';
import personalized4 from './assets/personalized4.png';

// Nearby;
export const NearbyRestaurants = [
  {
    img: `${Nearby1}`,
    title: 'Uma Parlour - Pure Vegetarian',
    place: 'South Indian ',
    rate: [{ icon: AiFillStar, number: '3.2' }],
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '30 Mins',
      },
    ],
    amount: [
      {
        icon: BsPeople,
        people: '200 for two',
      },
    ],
  },
  {
    img: `${Nearby2}`,
    title: 'Uma Parlour - Pure Vegetarian',
    place: 'South Indian ',
    rate: [{ icon: AiFillStar, number: '4' }],
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '20 Mins',
      },
    ],
    amount: [
      {
        icon: BsPeople,
        people: '150 for two',
      },
    ],
  },
  {
    img: `${Nearby3}`,
    title: 'Swap - Diet Meal Box',
    place: 'Healthy Food, Salads',
    rate: [{ icon: AiFillStar, number: '4.5' }],
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '40 Mins',
      },
    ],
    amount: [
      {
        icon: BsPeople,
        people: '300 for two',
      },
    ],
  },
  {
    img: `${Nearby4}`,
    title: 'The Good Bowl - Traditional Bowls',
    place: 'North Indian, Punjabi',
    rate: [{ icon: AiFillStar, number: '4.8' }],
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '25 Mins',
      },
    ],
    amount: [
      {
        icon: BsPeople,
        people: '250 for two',
      },
    ],
  },
];

// recommendFood
export const recommendFood = [
  {
    img: `${recommendFood1}`,
    title: 'Paneer Tikka Rice Bowl',
    place: 'The Good Bowl ',
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '20 Mins',
      },
    ],
    price: [
      {
        icon: IoPricetagOutline,
        cash: '₹200',
      },
    ],
  },
  {
    img: `${recommendFood2}`,
    title: 'Aloo Paratha Curd Meal (2 pcs)',
    place: 'SLunch Box ',
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '25 Mins',
      },
    ],
    price: [
      {
        icon: IoPricetagOutline,
        cash: '₹169',
      },
    ],
  },
  {
    img: recommendFood3,
    title: 'Baked Pizza Wrap - Vegetarian',
    place: 'Faasos - Wraps & Rolls',
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '35Mins',
      },
    ],
    price: [
      {
        icon: IoPricetagOutline,
        cash: '₹209',
      },
    ],
  },
  {
    img: `${recommendFood4}`,
    title: 'Mixed Veg Fried Rice with dry fruits',
    place: 'MFC Restaurant',
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '24 Mins',
      },
    ],
    price: [
      {
        icon: IoPricetagOutline,
        cash: '₹180',
      },
    ],
  },
];

//RecommendRestaurant;
export const menu = [
  { img: `${menu1}`, title: 'Sandwich' },
  { img: `${menu2}`, title: 'North Indian Thali' },
  { img: `${menu3}`, title: 'Egg BreakFast' },
  { img: `${menu4}`, title: 'Rolls & Puffs' },
  { img: `${menu5}`, title: 'Salads' },
  { img: `${menu6}`, title: 'Biriyani Box' },
];

export const personalized = [
  {
    img: `${personalized1}`,
    title: 'Baked Pizza Wrap - Vegetarian',
    place: 'Faasos - Wraps & Rolls',
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '35  Mins',
      },
    ],
    price: [
      {
        icon: IoPricetagOutline,
        cash: '₹209',
      },
    ],
  },
  {
    img: `${personalized2}`,
    title: 'Butter Chicken Pizza - 8 serve',
    place: 'Suren Pastries',
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '25 Mins',
      },
    ],
    price: [
      {
        icon: IoPricetagOutline,
        cash: '₹289',
      },
    ],
  },
  {
    img: `${personalized3}`,
    title: 'Mexican Patty Signature Wraps',
    place: 'Subway',
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '32 Mins',
      },
    ],
    price: [
      {
        icon: IoPricetagOutline,
        cash: '₹273',
      },
    ],
  },
  {
    img: `${personalized4}`,
    title: 'Southwest Chicken Salad',
    place: 'Burgerito',
    distance: [
      {
        icon: CiDeliveryTruck,
        time: '41 Mins',
      },
    ],
    price: [
      {
        icon: IoPricetagOutline,
        cash: '₹220',
      },
    ],
  },
];