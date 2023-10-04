# SFAW Workshop React useForm

### Intro

- **What useForm and useFormContext are:**
  - useForm: A custom React Hook that simplifies form validation and data submission.
  - useFormContext: Makes it easier to pass form methods across deeply nested components.

- **Importance in React:**
  - Reduces boilerplate, making code more DRY.
  - Simplifies complex validation logic.

---

### Basic Setup

- **Installing Required Packages:**
  - Running `npm install react-hook-form` or the current command.

- **Simple Form Setup:**
  - Creating a basic React component.
  - Importing and invoking `useForm`.

---

### useForm Basics

- **Main Methods:**
  - `handleSubmit`: Wraps your submit function, taking care of validation.
  - `register`: Registers an input with the form for validation.
  - `setValue`: Programmatically sets the value of registered components.
  - `getError`: Fetches error messages tied to specific fields.

- **Form Validation:**
  - Manual: Showing how to manually specify error messages and logic.
  - Schema-based: Using Yup to create a schema that `useForm` will validate against.

---

### useFormContext

- **Intro to useFormContext:**
  - When and why to use `useFormContext`.
  - Example problem: Imagine a form split across different components or even files.
  
- **Use-Case:**
  - How `useFormContext` simplifies state management in such cases.
  - Maybe even touch on combining it with context API for more complex scenarios.

---

### Advanced Usage

- **Custom Hooks:**
  - Creating custom hooks that utilize `useForm` or `useFormContext` for reusable form logic.
  
- **Form Array Fields:**
  - How to manage dynamic fields in a form using the `useFieldArray` hook or similar methods.

---

### Common Pitfalls & Best Practices

- **Things to Watch For:**
  - Overcomplicating validation logic.
  - Not unregistering inputs that are conditionally rendered, leading to stale data.

- **Best Practices:**
  - Leveraging built-in validation over manual logic when possible.
  - Keeping forms modular, perhaps one hook per logical section of a form.

---

### Q&A

- Open the floor for questions. Have some FAQs prepared just in case it's a shy crowd.
