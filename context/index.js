import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [data, setData] = useState({});
  const [subscribeData, setSubscribeData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const setSubscribeValues = (values) => {
    setSubscribeData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };


  return (
    <FormContext.Provider value={{ data, setFormValues , subscribeData  , setSubscribeValues}}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
