import React ,{useState, useEffect}from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CustomerDetails.css'

const CustomerDetails = () => {

    const CustomerId = useSelector((state)=> state.rootReducer.customerClick);

    const [customerData, setCustomerData] = useState('');

    const [nameChange , setNameChange] = useState(true)

    const [name ,setName] = useState('');

    const navigate = useNavigate();



    // console.log(customerData);
    console.log(customerData);

   const {id , first_name , last_name, email} = customerData;

    useEffect(
         ()=>{
         axios.post(`http://localhost:80/customerWithId/${CustomerId}`).then((res)=>setCustomerData(res.data.customer)).catch((err)=>{
                    console.log(err);
                });
          
        },[nameChange]
    )

   const submitName = (e)=>{
    e.preventDefault();
axios.put('http://localhost:80/UpdateCustomer',{data:{
   
    "title" : "first_name",
    "value": name,
    "id":CustomerId

}}).then((res)=>console.log(res)).catch((err)=>console.log(err));

navigate('/');

setNameChange(!nameChange);

   } 


    return (
        <div>
        <div className='DetailBox'>


<div className='Title'>
{first_name} {last_name}
</div>
<div> <form method='POST'> <div className='input-name'><input className='' value={name} onChange={(e)=>setName(e.target.value)} /></div> <div ><button    className='btn' onClick={submitName}>change name</button> </div> </form></div>



</div>
        </div>
    );
}

export default CustomerDetails;
