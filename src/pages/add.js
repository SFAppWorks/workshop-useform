import Input from "@/components/input";
import AddressWrapper from "@/containers/address-wrapper";
import {add, isBefore} from "date-fns";
import {useState} from "react";

const AddNewAddress = () => {
    const [formData, setFormData] = useState({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: ''
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
        if (!formData.addressLine1) newErrors.addressLine1 = 'Address Line 1 is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
        if (formData.zipCode && formData.zipCode.length < 5) newErrors.zipCode = 'Your zip code must contain 5 digits'
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
            <h1>Add New Address</h1>
            <form onSubmit={handleSubmit}>
                <br/>
                <AddressWrapper formData={formData} errors={errors} handleChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewAddress;