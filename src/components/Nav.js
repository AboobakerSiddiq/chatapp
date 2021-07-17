import React from 'react';
import './Nav.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CallIcon from '@material-ui/icons/Call';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {Link} from "react-router-dom"

function Nav() {
   
    return (
        <div className='nav' >
           <div className='nav_contents'>
           <div>
           <img className="nav_logo" alt="" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"/>
           </div>
           <div className='right_icons'>
           <div className='Notification_div'>
           <NotificationsNoneIcon />
           </div>
           <div className='Notification_div'>
           <CallIcon />
           </div>
           <div className='Notification_div'>
           <VideoCallIcon />
           </div>
           
           <div className='Notification_div'>
           <Link to="/">
           <AccountBoxIcon />
           </Link>
           </div>

           <hr/>
           </div>
           
           </div>
           
        </div>
    )
}

export default Nav
