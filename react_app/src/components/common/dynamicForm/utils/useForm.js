import { useState, useEffect } from "react";

const useForm = (callBack, defaults, validate, validate_single) => {
  const [values, setValues] = useState(defaults);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleBlur = (e) => {
    const field = e.target.name;
    //console.log("FIELD EM handleBlur DE useForm", field);
    setErrors(validate_single(values, field));
    setSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("DEU CERTO handleSubmit EM useForm");
    setSubmitting(true);

    const valueErrors = validate(errors);
    setErrors(valueErrors);

    if (Object.keys(valueErrors).length > 0) {
      //console.log(valueErrors);
    } else {
      callBack(values);
    }
  };

  useEffect(
    (submitting, handleSubmit, values) => {
      if (Object.keys(errors).length === 0 && submitting) {
        handleSubmit(values);
      }
    },
    [errors]
  );

  return { handleBlur, handleChange, handleSubmit, values, errors };
};
export default useForm;

/* const useForm = (submitCallBack) => {
  const [state, setState] = useState({}); //objeto vazio para incrementar inputs dinamicamente

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallBack();
  };

  const handleChange = (e) => {
    e.persist();
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return [state, handleChange, handleSubmit]; //retorna estado atualizado e função handleChange
};
export default useForm;
*/
