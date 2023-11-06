export function validateWebsiteLink(link: string) {
  const pattern = /^(https:\/\/)([\w-]+\.)+([a-z]{2,3})$/i;
  if (!link) {
    return undefined;
  }
  if (pattern.test(link)) {
    const domain = link.split('/')[2]; // Извлекаем домен из ссылки
    if (domain.endsWith('.com') || domain.endsWith('.ru')) {
      return undefined; // Ссылка валидна
    }
  }
  return 'Incorrect Format (https:)'; // Ссылка не валидна
}
export function validateEmail(email:string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    return undefined; // Адрес электронной почты корректный
  } else {
    return 'Incorrect email'; // Адрес электронной почты некорректный
  }
}
export const requiredField = (value: string) => {
  if (value) {
    return undefined;
  }
  return 'Field is required';
};
export const allUndefined = (value: string) => {
  return undefined;
};
export const maxLengthCreator = (maxlength: number) => (value: string) => {
  if (value.length > maxlength) {
    return `Max length is ${maxlength}`;
  }
  return undefined;
};
export const maxLengthCreator150 = (value: string) => {
  if (value?.length > 150) {
    return `Max length is ${150}`;
  }
  return undefined;
};
export const minLengthCreator = (minlength: number) => (value: string) => {
  if (value.length <= minlength) {
    return `Min length is ${minlength}`;
  }
  return undefined;
};

export let maxLength30 = maxLengthCreator(30);
export let maxLength150 = maxLengthCreator(150);
export let minLength3 = minLengthCreator(3);
