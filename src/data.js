import Nearby1 from './assets/Nearby1.png';
import Nearby2 from './assets/Nearby2.png';
import Nearby3 from './assets/Nearby3.png';
import Nearby4 from './assets/Nearby4.png';
import {AiFillStar} from 'react-icons/ai';
import {BsPeople} from 'react-icons/bs';
import {CiDeliveryTruck} from 'react-icons/ci';
// recommendFood
import recommendFood1 from './assets/recommendFood1.png';
import recommendFood2 from './assets/recommendFood2.png';
import recommendFood3 from './assets/recommendFood3.png';
import recommendFood4 from './assets/recommendFood4.png';
import {IoPricetagOutline} from 'react-icons/io5';

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
];;

// RecommendFood;
// Nearby;
