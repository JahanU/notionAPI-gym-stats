import { useState } from 'react'

const useInput = (validateValue) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = value.length > 3;
    const inputHasError = !valueIsValid && isTouched;

    console.log('isTouched: ', isTouched);
    console.log('value is valid: ', valueIsValid);
    console.log('inputHasError: ', inputHasError);

    const valueChangeHandler = (e) => {
        setValue(e.target.value);
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true);
    }

    const reset = () => {
        setValue('');
        setIsTouched(false);
    }

    return { value, valueIsValid, inputHasError, valueChangeHandler, inputBlurHandler, reset }
}

export default useInput;