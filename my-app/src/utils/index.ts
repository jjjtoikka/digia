import { Data } from '../types';

let lastId = 0;

export function unique(i: string | number): string {
  const key = `${i}_${lastId++}`;
  // console.log(key);
  return key;
}

export const validate = (value: string, key: string) => {
  let valid = false;
  if (value) {
    if (key === 'email') {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (value.match(mailformat)) valid = true;
      else valid = false;
    } else valid = true;
  }
  return valid;
};

// const validateAll = (data: Data) => {
//   Object.entries(data).map(
//     ([key, value], i: number) => validate(key as keyof Data, value))
// }
