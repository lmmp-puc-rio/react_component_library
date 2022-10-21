import { useState, useEffect } from "react";

const useForm = (apiCallback, defaults, validate, validate_single) => {
  const [values, setValues] = useState(defaults);
  const [errors, setErrors] = useState({});
  //TODO: Understand UseEffect Warning disabled
  // eslint-disable-next-line
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Callback to handle change of focus for a field
  const handleBlur = (e) => {
    const field = e.target.name;
    // console.log(field)
    setErrors(validate_single(values, field));
    setIsSubmitting(false);
  };

  // Callback to handle change of a field value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Callback to handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entrei");
    setIsSubmitting(true);
    const uiErrors = validate(values);

    setErrors(uiErrors);

    if (Object.keys(uiErrors).length > 0) {
      console.log(uiErrors);
    } else {
      // TODO: place correct submit callback function
      apiCallback(values);
    }
  };

  // React Hook called when component is redendered
  useEffect(
    (isSubmitting, handleSubmit, values) => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        handleSubmit(values);
      }
    },
    // called when errors are updated
    [errors]
  );

  return { handleBlur, handleChange, handleSubmit, values, errors };
};

export default useForm;
