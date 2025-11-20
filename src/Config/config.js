import imageOne from '../assets/faces/uifaces-human-image (40).jpg';
import imageTwo from '../assets/faces/uifaces-human-image (42).jpg';
import imageThree from '../assets/faces/uifaces-human-image (34).jpg';
import imageFour from '../assets/faces/uifaces-human-image (35).jpg';

export const people = [
  {
    id: 1,
    icon: imageOne,
    name: 'John Doe',
    age: 30,
    email: 'johndoe@gmail.com',
    profession: 'Senior Developer',
    companysSite: 'planet.io',
  },
  {
    id: 2,
    icon: imageTwo,
    name: 'Mary Biket',
    age: 25,
    email: 'mary@gmail.com',
    profession: 'Human Resource',
  },
  {
    id: 3,
    icon: imageThree,
    name: 'Andrew Scheman',
    age: 27,
    email: 'Andrew@gmail.com',
    profession: 'Manager',
    companysSite: 'npm.org',
  },
  {
    id: 4,
    icon: imageFour,
    name: 'Willis Otieno',
    age: 42,
    email: 'Willis@gmail.com',
    profession: 'CEO',
  },
];

let invalidForEmail;

export const firstFormControls = [
  {
    id: 'username',
    name: 'Username',
    input: 'text',
    placeholder: 'Enter your username',
    value: '',
    disabled: true,
    invalid: false,
  },
  {
    id: 'email',
    name: 'Email',
    input: 'email',
    placeholder: 'Enter your email',
    value: '',
    disabled: false,
    invalid: invalidForEmail,
  },
  {
    id: 'password',
    name: 'Password',
    input: 'password',
    placeholder: 'Enter password',
    value: '',
    disabled: false,
    invalid: false,
    required: true,
  },
];

export function handleInvalidForEmail(emailValid, setEmailValid, e) {
  if (e.target.value.endsWith('@gmail.com')) {
    setEmailValid({
      emailValid: true,
    });
  }
}

export const carBrands = [
  {
    id: 1,
    name: 'Lamborghini Urus',
    dateOfManufactury: new Date('2/8/2023 10:00:00'),
    manufacturer: 'Lamborghini',
  },
  {
    id: 2,
    name: 'Ferrari SF90',
    dateOfManufactury: new Date('4/10/2018 17:00:00'),
    manufacturer: 'Ferrari',
  },
  {
    id: 3,
    name: 'Buggatti Chiron',
    dateOfManufactury: new Date('1/10/2021 12:30:00'),
    manufacturer: 'Buggatti',
  },
];

// Todos
export const todos = [
  {
    id: 1,
    title: 'Do coding drills',
    time: new Date('4/5/2021 17:30:00'),
  },
  {
    id: 2,
    title: 'Travel the country',
    time: new Date('7/5/2021 17:30:00'),
  },
  {
    id: 3,
    title: 'Invest in crypto',
    time: new Date('8/5/2021 17:30:00'),
  },
];


export const products = [
  {
    category: 'Fruits',
    price: '$ 1',
    stocked: true,
    name: 'Apple',
  },
  {
    category: 'Fruits',
    price: '$ 1',
    stocked: true,
    name: 'Dragon Fruit',
  },
  {
    category: 'Fruits',
    price: '$ 2',
    stocked: false,
    name: 'Passion Fruit',
  },
  {
    category: 'Vegetables',
    price: '$ 2',
    stocked: true,
    name: 'Spinach',
  },
  {
    category: 'Vegetables',
    price: '$ 4',
    stocked: false,
    name: 'Pumpkin',
  },
  {
    category: 'Vegetables',
    price: '$ 1',
    stocked: true,
    name: 'peas',
  },
];

const locationsPathNames = [
  '1,/hover-state',
  '2,/responsive-design',
  '3,/dark-mode',
  '4,/theme-variables',
  '5,/colors',
  '6,/custom-styles',
  '7,/detecting-classes',
  '8,/functions-directives',
  '9,/aspect-ratio',
];
export { locationsPathNames };