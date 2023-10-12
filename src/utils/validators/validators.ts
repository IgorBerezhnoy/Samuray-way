export function validateWebsiteLink(link:string) {
    // Паттерн для проверки ссылки
    var pattern = /^(https:\/\/)([\w-]+\.)+([a-z]{2,3})$/i;
if (!link){
    return undefined
}
    // Проверяем ссылку по паттерну
    if (pattern.test(link)) {
        const domain = link.split('/')[2]; // Извлекаем домен из ссылки
        if (domain.endsWith('.com') || domain.endsWith('.ru')) {
            return undefined; // Ссылка валидна
        }
    }
    return  'Incorrect Format (https:)'; // Ссылка не валидна
}

export const requiredField = (value: string) => {
    if (value) {
        return undefined;
    }
    return 'Field is required';
};
export const maxLengthCreator = (maxlength: number) => (value:string)=>{
    if (value.length > maxlength) {
        return `Max length is ${maxlength}`;
    }
    return undefined
};
export const minLengthCreator = (minlength: number) => (value:string)=>{
    if (value.length <= minlength) {
        return `Min length is ${minlength}`;
    }
    return undefined
};

export let maxLength30=maxLengthCreator(30)
export let maxLength150=maxLengthCreator(150)
export let minLength3=minLengthCreator(3)
