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
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required'
    if (formData.dateOfBirth && !isOver18(formData.dateOfBirth)) newErrors.dateOfBirth = 'You must be at least 18 years of age to use this website'

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
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div>
            <label>Date of Birth</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
            {errors.dateOfBirth && <span>{errors.dateOfBirth}</span>}
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" autoComplete={"email"} value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" autoComplete={"new-password"} name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" autoComplete={"new-password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default HomePage;