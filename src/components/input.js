
const Input = ({type='text', label, name, stateValue, onChange, errors, autoComplete}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} autoComplete={autoComplete} name={name} value={stateValue} onChange={onChange} />
            {errors && <span>{errors}</span>}
        </div>
    )
};

export default Input;