// eslint-disable-next-line max-len
const getRandomInteger = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

export default getRandomInteger;
