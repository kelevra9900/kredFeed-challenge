import { GlobalForm } from 'interfaces/form';
import React, { createContext, useState } from 'react';

type FormContextType = {
    form: GlobalForm | null,
    setForm: React.Dispatch<React.SetStateAction<GlobalForm | null>>
}

type FormProps = {
    children: React.ReactNode
}


export const FormContext = createContext<FormContextType | null>(null);


export const FormContextProvider = ({children}: FormProps) => {
    const [ form, setForm ] = useState<GlobalForm | null>(null);

    return(
        <FormContext.Provider value={{form, setForm}}>
            {children}
        </FormContext.Provider>
    );

}