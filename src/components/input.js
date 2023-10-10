import useCustomField from "@/hooks/use-custom-field";

const Input = ({type = 'text', label, name, autoComplete, validations}) => {
    const {customRegister, customErrors} = useCustomField(name, validations)

    return (
        <div>
            <label>{label}</label>
            <input {...customRegister} type={type} autoComplete={autoComplete} name={name}/>
            {customErrors && <span>{customErrors.message}</span>}
        </div>
    )
};

export default Input;