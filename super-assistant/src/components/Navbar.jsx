import React from 'react';
import './Navbar.css'
import logo from '../assets/logoSVG.svg';
import {
    CircleInformationMajor,QuestionMarkMajor,PlayCircleMajor,EmailMajor,SearchMajor
  } from '@shopify/polaris-icons';
  import {Icon} from '@shopify/polaris';
  import rocket from '../assets/space-rocket-launch.svg'
  import {Avatar} from '@shopify/polaris';

  

const Navbar = () => {
    return (
        <>
            <div className='navbar-top'>
            <div className='left-div'>

            <div className='logo-title'>
<img className='logo' src={logo}/>
<p className='title'>Super Assistant</p>
</div>

<div className='left-button'>
<button className='l-button'>GROWTH</button>
</div>
</div>

<div className='central-div'>
<div className='icon'>
<Icon source={ SearchMajor} color="base"/>
</div>
<input  type="text" placeholder={`Search what you need, eg. "Return & Refunds" `}  />
</div>
<div className='right-corner'>
<div className='icons'>
<Icon
  source={CircleInformationMajor}
  color="base"
/>
<Icon source={ PlayCircleMajor} color="base"/>
<Icon source={QuestionMarkMajor} color="base"/>
<Icon  source={EmailMajor} color="base"/>
</div>
<div className='rocket'>
<button className='r-button'><div className='upgrade'><img  className='boost' src={rocket}/>Upgrade</div></button>
</div>
<div className='avatar'><Avatar></Avatar></div>

</div>
            </div>
        </>
    );
}

export default Navbar;
