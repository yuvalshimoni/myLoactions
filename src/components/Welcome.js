import React, { useState } from 'react';

import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default function Welcome () {

        return (
        <div className='Home'>
             <div className="box">


                 <div className="inner">
                     <Icon  name='home' size='massive' />

                     <h1>My loactions</h1>

                     <Link to={'/categories'} style={{fontSize: 20}}> Start! </Link>
                 </div>

             </div>
        </div>
        )

}

