import React ,{useEffect,useState,useCallback}from 'react';
import './Customers.css'
import {Button, Icon} from '@shopify/polaris';
import {
    ChevronLeftMinor,ChevronRightMinor,FilterMajor
  } from '@shopify/polaris-icons';

  import {Select} from '@shopify/polaris';

import axios from 'axios';
import UserData from './UserData';




const Customers = () => {

    

    const [userData , setUserData] =useState([]);

    const [selected, setSelected] = useState('Yesterday');

    const handleSelectChange = useCallback(
      (value) => setSelected(value),
      [],
    );
  
    const options = [
      {label: 'Today', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 days', value: 'lastWeek'},
    ];
  
     
useEffect( ()=>{

    const fetchData =async ()=>{


      const response = await axios('http://localhost:5000/customer');

      console.log(response);

     try{
     
      
      
      setUserData(response.data.customers);
     
     }catch(err){
      console.log(errr);
     }
     
   
    }

    fetchData();
   
},[])


  
console.log(userData);


    return (
        <div className='content'>

        <div className='header'>     
        <div className='left-div'> Import points to customers for past orders and signup. You can use this feature only once. Note: You need to enable points.  </div>
        <div className='right-div' >  

         <Select
      label="Date range"
      options={options}
      onChange={handleSelectChange}
      value={selected}/>

    </div>
         </div>

         <div className='main-content'>
         <div className='main-top'>

         <Button><Icon  source={ ChevronLeftMinor} color="base"/></Button>
         <Button><Icon  source={ ChevronRightMinor} color="base"/></Button>
         
        <button className='button-icon'> <div className='icon-btn'><Icon  source={ FilterMajor} color="base"/>Filter</div></button>

        </div>



{(userData===undefined ? null : (userData.map((user,index)=>{
    const {id ,email, first_name , last_name} = user;
    return (<UserData id={id} first_name={first_name} last_name={last_name} email={email}/>)
})))}


         </div>
       
        </div>
    );
}

export default Customers;
