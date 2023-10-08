import Input from "@/components/input";
import {add, isBefore} from "date-fns";
import {useState} from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',

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
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required'
    if (formData.dateOfBirth && !isOver18(formData.dateOfBirth)) newErrors.dateOfBirth = 'You must be at least 18 years of age to use this website'

    if (formData.zipCode && formData.zipCode.length < 5) newErrors.zipCode = 'Your zip code must contain 5 digits'
    setErrors(newErrors);

    // If no errors, return true
    return Object.keys(newErrors).length === 0;
  };

  const isOver18 = (birthday) => {
    const eighteenYearsAgo = add(new Date(), { years: -18 });
    return isBefore(new Date(birthday), eighteenYearsAgo);
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
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <br/>
          <h2>Personal Information</h2>
          <Input label={'First Name'} name={'firstName'} stateValue={formData.firstName} onChange={handleChange} errors={errors.firstName}/>
          <Input label={'Last Name'} name={'lastName'} stateValue={formData.lastName} onChange={handleChange} errors={errors.lastName}/>
          <Input type='date' label={'Date of Birth'} name={'dateOfBirth'} stateValue={formData.dateOfBirth} onChange={handleChange} errors={errors.dateOfBirth}/>
          <Input type='email' label={'Email'} autoComplete={'email'} name={'email'} stateValue={formData.email} onChange={handleChange} errors={errors.email}/>
          <Input type='password' label={'Password'} autoComplete={'new-password'} name={'password'} stateValue={formData.password} onChange={handleChange} errors={errors.email}/>
          <Input type='password' label={'Confirm Password'} autoComplete={'new-password'} name={'confirmPassword'} stateValue={formData.confirmPassword} onChange={handleChange} errors={errors.confirmPassword}/>
          <br/>
          <h2>Address Information</h2>
          <Input type='text' label={'Address Line 1'} name={'addressLine1'} stateValue={formData.addressLine1} onChange={handleChange} />
          <Input type='text' label={'Address Line 2'} name={'addressLine2'} stateValue={formData.addressLine2} onChange={handleChange} />
          <Input type='text' label={'City'} name={'city'} stateValue={formData.city} onChange={handleChange} />
          <Input type='text' label={'State'} name={'state'} stateValue={formData.state} onChange={handleChange} />
          <Input type='number' label={'Zip Code'} name={'zipCode'} stateValue={formData.zipCode} onChange={handleChange} errors={errors.zipCode}/>
          <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default SignupPage;