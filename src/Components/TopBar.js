import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import { AppContextData } from '../Context/ContextData'

import Logo from '../images/logo_svg.svg'


export default function TopBar() {
   const { toggleMenu } = useContext(AppContextData)
   return (
      <Row style={{padding: '15px 0'}} align="middle">
         <Col span={15} offset={1}>
            <div className="logoContainer">
               <img src={Logo} alt="Nima Logo" className="logo" />
            </div>
         </Col>
         <Col span={2} offset={6}>
            <button onClick={() => toggleMenu()}>Menu</button>
         </Col>
      </Row>
   )
}
