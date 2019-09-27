import React from 'react'

export default function HeadPage ({ title, clickBtnFunc })  {

    return (
    <div className="headPage clr">
        <h1>{title}</h1>
        <div className='linkBtn' onClick={clickBtnFunc}>Add New</div>
    </div>
    )


}
      