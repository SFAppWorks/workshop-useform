import {useFormContext} from 'react-hook-form';

const useCustomField = (fieldName, validation) => {
    const { register, formState: {errors} } = useFormContext(); // Note that useFormContext's generic can be typed for more specificity

    return {
        customRegister: register(fieldName, validation),
        customErrors: errors[fieldName]
    };
};

export default useCustomField;