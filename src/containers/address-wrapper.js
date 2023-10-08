import Input from "@/components/input";
import React, {Fragment} from 'react';

const AddressWrapper = ({formData, errors, handleChange}) => {
    return (
        <Fragment>
            <h2>Address Information</h2>
            <Input type='text' label={'Address Line 1'} name={'addressLine1'} stateValue={formData.addressLine1} onChange={handleChange} errors={errors.addressLine1}/>
            <Input type='text' label={'Address Line 2'} name={'addressLine2'} stateValue={formData.addressLine2} onChange={handleChange} errors={errors.addressLine2} />
            <Input type='text' label={'City'} name={'city'} stateValue={formData.city} onChange={handleChange} errors={errors.city} />
            <Input type='text' label={'State'} name={'state'} stateValue={formData.state} onChange={handleChange} errors={errors.state} />
            <Input type='number' label={'Zip Code'} name={'zipCode'} stateValue={formData.zipCode} onChange={handleChange} errors={errors.zipCode}/>
        </Fragment>
    )
};

export default AddressWrapper;