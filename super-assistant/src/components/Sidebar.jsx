import React from 'react';
import './Sidebar.css';
import {Icon} from '@shopify/polaris';
import {
    HomeMajor,CustomersMajor,DataVisualizationMajor,ConfettiMajor,DiscountsMajor,GiftCardMajor,FinancesMajor,PaintBrushMajor,EmailNewsletterMajor,SendMajor,SettingsMajor,BuyButtonMajor
  } from '@shopify/polaris-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import {changeTab} from '../store/cartSlice';

const Sidebar = ({handleBtn}) => {

    const dispatch = useDispatch();

const navigate = useNavigate();


    return (
        <div className='sidebar'>


            <div className='icon-title' onClick={() =>dispatch(changeTab('home'))}><div className='icon'><Icon  source={ HomeMajor} color="base"/></div> <div className='title'>Home</div></div>
           
            <div className='icon-title' onClick={() =>dispatch(changeTab('customers')) }><div className='icon'><Icon source={ CustomersMajor} color="base"/></div> <div className='title'>Customers</div></div>

            <div className='icon-title' ><div className='icon'><Icon source={ DataVisualizationMajor} color="base"/></div> <div className='title'>Performance</div></div>


             <p className='heading'>CUSTOMISE YOUR PROGRAMME</p> 

            <div className='icon-title'><div className='icon'><Icon source={ ConfettiMajor} color="base"/></div> <div className='title'>Points</div></div>

            <div className='icon-title'><div className='icon'><Icon source={ DiscountsMajor} color="base"/></div> <div className='title'>Refrrals</div></div>

            <div className='icon-title'><div className='icon'><Icon source={ GiftCardMajor} color="base"/></div> <div className='title'>Gift cards</div></div>

            <div className='icon-title'><div className='icon'><Icon source={ FinancesMajor} color="base"/></div> <div className='title'>VIP Tiers</div></div>


            <p className='heading'>BRANDING</p>

            <div className='icon-title'><div className='icon'><Icon source={ PaintBrushMajor} color="base"/></div> <div className='title'>Theme</div></div>

            <div className='icon-title'><div className='icon'><Icon source={ EmailNewsletterMajor} color="base"/></div> <div className='title'>Customer emails</div></div>

            <div className='icon-title'><div className='icon'><Icon source={ SendMajor} color="base"/></div> <div className='title'>Email settings</div></div>

   

            <p className='heading'>GIFTCARD FEATURES</p>

            <div className='icon-title'><div className='icon'><Icon source={ BuyButtonMajor} color="base"/></div> <div className='title'>Sell Giftcard</div></div>

            <div className='icon-title'><div className='icon'><Icon source={ EmailNewsletterMajor} color="base"/></div> <div className='title'>Manual giftcards</div></div>


            <p className='heading'>CAMPAIGNS</p>

            <div className='icon-title'><div className='icon'><Icon source={ SettingsMajor} color="base"/></div> <div className='title'>Settings</div></div>



            

           
           
        </div>
    );
}

export default Sidebar;
