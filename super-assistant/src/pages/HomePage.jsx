import React , {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Home from '../components/Home';
import Customers from '../components/Customers'
import '../App.css'
import {useSelector} from 'react-redux';
import CustomerDetails from '../components/CustomerDetails';


const HomePage = () => {

  const btnClick = useSelector((state)=> state.rootReducer.slideBtnClick);

  console.log(btnClick);


    return (
        <div>
        
        <Navbar/>
      <div className='center-content'>
      <Sidebar />
      <div className='main-content'> 
       {(btnClick==='home'&& (<Home/>))} 
       {(btnClick==='customers' && (<Customers/>))}
       {(btnClick==='customerDetails')&& (<CustomerDetails/>)}
       </div>
      
      </div>
     



            
        </div>
    );
}

export default HomePage;
