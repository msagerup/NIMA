import React, {useContext} from 'react'
import ContactForm from '../Components/ContactForm'
import {AppContextData} from '../Context/ContextData'
import { Link } from 'react-router-dom';

import {
   Icon,
   Menu,
   Segment,
   Sidebar,
} from 'semantic-ui-react'

const Nav = (props) => {
   const {menuOpen} = useContext(AppContextData)

   return (
      <div>
         <section>
         <Sidebar.Pushable as={Segment}>
            <Sidebar
               as={Menu}
               animation='scale down'
               icon='labeled'
               inverted
               // onHide={() => setVisible(false)}
               vertical
               visible={menuOpen}
               width='wide'
               direction='right'
            >
               <Menu.Item>
                  <Link to="/">
                     <Icon name='home' />
                     Home
                  </Link>
               </Menu.Item>
               <Menu.Item >
                  <Icon name='clipboard outline' />
                  <Link to="/about">Hooks
                  </Link>
                  
               </Menu.Item>
               <Menu.Item >
                  <Icon name='camera' />
                  About Us
               </Menu.Item>
               <Menu.Item >
                  <Icon name='camera' />
                  About Us
               </Menu.Item>
               <Menu.Item >
                  <Icon name='camera' />
                  Contact Usss
                  <ContactForm />
               </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
               {props.children}
            </Sidebar.Pusher>
         </Sidebar.Pushable>
         </section>
      </div>
   )
}




export default Nav;