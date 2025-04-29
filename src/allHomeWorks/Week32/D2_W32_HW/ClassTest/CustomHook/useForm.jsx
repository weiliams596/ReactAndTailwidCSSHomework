import React, { useEffect, useState } from 'react'

export default function useForm(domForm) {
  const [formInfoObject, setFormInfoObject] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  const handleInputChange = (event) => {
    const formData = {};
    const formElements = domForm.elements;
    for (const element of formElements)
        if (element.name)
            formData[element.name] = element.value;
    setFormInfoObject(formData);
  }

  useEffect(()=>{
    domForm.addEventListener('submit', handleFormSubmit);
    domForm.addEventListener('input', handleInputChange);
    return () => {
      domForm.removeEventListener('submit', handleFormSubmit);
      domForm.removeEventListener('input', handleInputChange);
    }
  },[domForm]);
  return {formInfoObject};
}
