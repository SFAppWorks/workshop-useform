import Input from "@/components/input";
import {add, isBefore} from "date-fns";
import {useState} from "react";

const HomePage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Add your validation logic here
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        setErrors(newErrors);

        // If no errors, return true
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Do something with formData, e.g., send it to an API
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input type='email' label={'Email'} autoComplete={'email'} name={'email'} stateValue={formData.email} onChange={handleChange} errors={errors.email}/>
                <Input type='password' label={'Password'} autoComplete={'new-password'} name={'password'} stateValue={formData.password} onChange={handleChange} errors={errors.email}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HomePage;