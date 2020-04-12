import React, {useContext} from 'react'
import { Row, Col } from 'antd';
import {AppContextData} from '../Context/ContextData'

import Logo from '../images/logo_svg.svg'


export default function TopBar() {
   const {toggleMenu} = useContext(AppContextData)
   return (
      <Row>
         <Col span={5}>
         <img src={Logo} alt="Nima Logo" style={{ padding: '10px 20px', width: '180px'}} />
         </Col>
         <Col span={2} offset={17}>
            <button onClick={() => toggleMenu()}>Menu</button>
         </Col>
      </Row>
   )
}
