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
export let minLength=minLengthCreator(3)