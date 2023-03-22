import React from 'react';
import './UserData.css';

const UserData = ({id , email, first_name , last_name}) => {



    return (
        <div className='box-outer' key={id} >
            <div className='box-left'>
<div className='title'>
    {first_name}  {last_name}
</div>

<div className='email'>
    {email}
</div>
            </div>
            <div className='box-right'>
<div className='sm-box'> 

<div className='value-box'>0</div>  
<div className='title-box'>Giftcards</div>

</div>

<div className='sm-box'> 

<div className='value-box'>0</div>  
<div className='title-box'>Title</div>

</div>

<div className='sm-box'> 

<div className='value-box'><p>0</p></div>  
<div className='title-box'>Value</div>

</div>
            </div>
        </div>
    );
}

export default UserData;
