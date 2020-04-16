import React, { useContext } from 'react';
import { Drawer } from 'antd';

import { AppContextData } from '../Context/ContextData'



const DrawerForm = () => {
  const { toggleContactDrawer, contactDrawerOpen, contactPerson } = useContext(AppContextData)

  // Calculate window width for drawer menu size.
  let width = window.innerWidth
  let drawerWidth;
  if (width <= 600) {
    drawerWidth = 450
  } else {
    drawerWidth = 1500
  }


  const onClose = () => {
    toggleContactDrawer(false)
  };

  return (

    <>
      <Drawer
        width={drawerWidth}
        onClose={onClose}
        visible={contactDrawerOpen}
        bodyStyle={{ paddingBottom: 80, backgroundColor: '#3d3d3d' }}
        
      >

        <form>
          <input id="input-1" type="text" placeholder="John Doe" required autofocus />
          <label for="input-1">
            <span className="label-text">Full Name</span>
            <span className="nav-dot"></span>
            <div className="signup-button-trigger">Sign Up</div>
          </label>
          
          <input id="input-2" type="email" placeholder="email@address.com" required />
          <label for="input-2">
            <span className="label-text">Email</span>
            <span className="nav-dot"></span>
          </label>
          <input id="input-3" type="text" placeholder="Enter your message" required />
          <label for="input-3">
            <span className="label-text">Message</span>
            <span className="nav-dot"></span>
          </label>
          <button type="submit" className='formSend'>Send</button>
          <p className="tip">Press tab or enter. Mobile users, press next on your keyboard</p>
  <div className="signup-button">Send a message to {contactPerson}</div>
        </form>


      </Drawer>
    </>

  )
}


export default DrawerForm;