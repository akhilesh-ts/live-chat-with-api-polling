import { nameList, positiveAff } from "./constant";

export const generateRandomName = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const newQuote = () => {
  const randomNumber = Math.floor(Math.random() * positiveAff.length);

  return positiveAff[randomNumber];
};
