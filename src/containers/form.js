import {FormProvider, useForm} from "react-hook-form";

const Form = ({formMethods, children, title, onSubmit}) => {
    return (
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                <h1>{title}</h1>
                {children}
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    );
};

export default Form;