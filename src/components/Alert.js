import React, { useState } from 'react';


function Alert(props) {
    const [showAlert,setAlert]=useState();
    const alert = () => {
        let showAlert ='text is uppercase';
        setAlert(showAlert);
      };
    return (
        <div>
<div className="alert alert-primary" role="alert">
</div>            
        </div>
    )
}

export default Alert;

