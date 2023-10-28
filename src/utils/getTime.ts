export const getEditedTime = () => {
  return `${getDoubleStrings(new Date().getHours())}:${getDoubleStrings(new Date().getMinutes())}`;
};
const getDoubleStrings = (number: number) => number < 10 ?
  '0' + number
  : number;