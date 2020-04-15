import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import { AppContextData } from '../Context/ContextData'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Logo from '../images/logo_svg.svg'
import { IconButton } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const primary = grey[600]; // #F44336

export default function TopBar() {
   const { toggleMenu } = useContext(AppContextData)
   return (
      <Row style={{ padding: '15px 0' }} align="middle">
         <Col span={5} offset={1}>
            <div className="logoContainer">
               <img src={Logo} alt="Nima Logo" className="logo" />
            </div>
         </Col>
         <Col lg= {{span: 1, offset: 17}} xs={{span:1, offset:15}} >
            <IconButton color={primary} >
               <MenuOpenIcon fontSize='large' onClick={() => toggleMenu()}  />
            </IconButton>
         </Col>
      </Row>
   )
}
