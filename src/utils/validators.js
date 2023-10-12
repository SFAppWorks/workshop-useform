export const emailValidation = {
    pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'invalidEmail'
    }
}

export const passwordValidation = {
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, //At least 8 characters | At least one uppercase letter | At least one lowercase letter | At least one number | At least one special character
        message: 'invalidPassword'
    }
}