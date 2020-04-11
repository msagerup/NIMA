import React from 'react'

import Logo from '../images/logo_svg.svg'


export default function TopBar() {
   return (
      <>
         <img src={Logo} alt="Nima Logo" style={{ padding: '10px 20px', width: '180px'}} />
      </>
   )
}
