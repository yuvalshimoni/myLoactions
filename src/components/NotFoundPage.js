import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'

const NotFoundPage = () => (
            <div className="NotFoundPage"> 
                <h3>The Page Not Found Sory</h3>
                <Link to='/'>
                  <Icon name='step backward' />
                  Back To home
                </Link>
            </div>
      )



export default NotFoundPage