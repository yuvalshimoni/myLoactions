import React, { useState } from 'react'

export default function useHandleInput (inialValue){

     const [value, setValue] = useState( inialValue )

     const handleChange = (e) => setValue(e.target.value)

    return {
        value,
        handleChange,
        setValue
    }

  }

