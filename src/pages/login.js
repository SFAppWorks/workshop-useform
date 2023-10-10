import Input from "@/components/input";
import Form from "@/containers/form";
import {emailValidation, passwordValidation} from "@/utils/validators";
import {useForm} from "react-hook-form";

const LoginPage = () => {
    const formMethods = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = (values) => {
        debugger;
        // Do something with formData, e.g., send it to an API
        console.log('Form submitted:', values);
    };

    return (
        <div>
            <Form formMethods={formMethods} onSubmit={onSubmit} title={'Login'}>
                <Input type='email' label={'Email'} autoComplete={'email'} name={'email'} validations={{...emailValidation, required: 'This field is required'}}/>
                <Input type='password' label={'Password'} autoComplete={'new-password'} name={'password'} validations={{...passwordValidation, required: 'This field is required'}}/>
            </Form>
        </div>
    );
};

export default LoginPage;