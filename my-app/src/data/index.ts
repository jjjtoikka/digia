import { Data, ErrorData } from '../types';

export const initialModel = (
  id = '',
  name = '',
  email = '',
  phone = ''
): Data => ({
  id,
  name,
  email,
  phone
});

export const initialErrorModel = (
  name = false,
  email = false,
  phone = false
): ErrorData => ({
  name,
  email,
  phone
});

const names = [
  'Jussi',
  'Pekka',
  'Kalle',
  'Juhani',
  'Juuso',
  'Matti',
  'Sirpa',
  'Elli',
  'Nelli',
  'Asko',
  'Gunnel',
  'Ilkka',
  'Kalervo',
  'Sari',
  'Leena',
  'Toni',
  'Mikko',
  'Timo',
  'Petteri',
  'Paula'
];

const makeItems = () => {
  const items = [];
  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    items.push(
      initialModel(
        index.toString(),
        name,
        `${name.toLowerCase()}@email.com`,
        `050 567 89${index}`
      )
    );
  }
  return items;
};

export const dataArray: Data[] = makeItems();
