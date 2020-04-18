import React, { useContext } from 'react';
import { Drawer, Col, Row } from 'antd';
import { Typography } from '@material-ui/core';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import placeholder from '../images/placeholder.jpg'
import { AppContextData } from '../Context/ContextData'

const ListingDetails = () => {
  const { toggleListingDrawer, listingDrawerOpen } = useContext(AppContextData)

  // Calculate window width for drawer menu size.
  let width = window.innerWidth
  let drawerWidth;
  if (width <= 600) {
    drawerWidth = 340
  } else {
    drawerWidth = 720
  }


  const onClose = () => {
    toggleListingDrawer(false)
  };

  return (

    <>
      <Drawer
        title="Dorado Beach, Puerto Rico"
        width={width}
        placement='left'
        onClose={onClose}
        visible={listingDrawerOpen}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'center',
            }}
          >

            <div onClick={onClose} type="primary" style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#201e1f', color: "white" }}>
              Close
              </div>
          </div>
        }
      >
        <Row justify="center" gutter={[10, 30]}>
          <Col lg={{ span: 20 }} xs={{ span: 24 }}>
            <img src={placeholder} alt='placeholder' className="imageHolder" />
            <div className="houseItems">
              <Typography>
                <KingBedIcon />
              7 Bedrooms
              <BathtubIcon />
              7 Full baths
              4 Half Baths
            </Typography>
            </div>
          </Col>
          <Col lg={{ span: 20 }} xs={{ span: 24 }}>
            <Typography variant='h6'>
              Featuring all amenities and requirements for a modern Caribbean lifestyle, this luxury villa is currently under construction with high quality materials and equipment.
              <Typography variant='h6' className='deviderHalf'>
                The property is set on an elevated plot of land with beautiful ocean views in the exclusive gated community of The Estates in Dorado Beach, Puerto Rico.
              </Typography>
            </Typography >
            <Typography variant="body1" className='deviderHalf'>
              The ground level comprises a living area with an integrated open-plan kitchen with direct access to the garden and pool area. The ground level also has a gym/playroom and a separate Guest Wing Suite with 3 En Suite bedrooms, walk in closets and a separate living room and kitchenette.
            </Typography>
            <Typography variant='body1'>
              The main floor has a living area connected to the main kitchen with a large deck overlooking the private garden and beautiful ocean views. The main floor also has a separate bedroom suite with 4 bedrooms, 3 of which are En Suite with walk in closets.
              This villa also has a 3rd floor mezzanine with a large private office with views of both the mountains to the south and ocean to the north.
            </Typography>
            <Typography variant="body1" className='deviderHalf'>
              The home has extensive systems for built-in wiring for whole-home Wi-Fi.
              The property includes a 3 car garage partially integrated into the ground with a live roof yoga pavilion.
            </Typography>
          </Col>
        </Row>
      </Drawer>
    </>
  )
}


export default ListingDetails;