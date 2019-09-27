import React, { useState } from 'react'

export default function useForm (initialValues){

    const [values, setValues] = useState( initialValues )

    const handleChange = (key, value) => {
        setValues({
          ...values,
          [key]: value
        })
      }

    return {
        values,
        setValues,
        handleChange,
    }

  }

