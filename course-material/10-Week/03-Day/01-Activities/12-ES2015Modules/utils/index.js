// Each named export can be individually imported into another module
export default [1, 2, 3, 4];

export const remove = (arr, el) => arr.filter(item => item !== el);

export const uniq = (arr) => {
  const uniqueArray = [];
  arr.forEach(item => {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
};

export const arrToObj = (arr) => {
  const arrObj = {};
  arr.forEach((item, index) => (arrObj[index] = item));
  return arrObj;
};

export const random = (min, max) => (Math.floor(Math.random() * max + min));
