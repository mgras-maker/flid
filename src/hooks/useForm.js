import { useState } from 'react';

/**
 * A custom hook for form handling with validation
 * @param {Object} initialValues - Initial form values
 * @param {Function} validateFn - Form validation function
 * @param {Function} onSubmitFn - Form submission function
 * @returns {Object} Form handling methods and state
 */
export const useForm = (initialValues, validateFn, onSubmitFn) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generalError, setGeneralError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear errors when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const validationErrors = validateFn ? validateFn({ [name]: values[name] }) : {};
    
    setErrors({
      ...errors,
      ...validationErrors
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setGeneralError(null);
    
    // Run validation on all fields
    const validationErrors = validateFn ? validateFn(values) : {};
    setErrors(validationErrors);
    
    // If no validation errors, proceed with submission
    if (Object.keys(validationErrors).length === 0) {
      try {
        await onSubmitFn(values);
        setIsSubmitted(true);
      } catch (error) {
        setGeneralError(
          error.message || 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.'
        );
      }
    }
    
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
    setGeneralError(null);
  };

  return {
    values,
    errors,
    generalError,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
};

export default useForm;
