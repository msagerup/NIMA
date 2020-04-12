import React from 'react'

import ImageGallery from 'react-image-gallery';

import hus1 from './img/hus1.jpg'
import hus2 from './img/hus2.jpg'
import hus3 from './img/hus3.jpg'
import hus4 from './img/hus4.jpg'
import hus5 from './img/hus5.jpg'

import hus1_tumb from './img/hus1_tumb.jpg'
import hus2_tumb from './img/hus2_tumb.jpg'
import hus3_tumb from './img/hus3_tumb.jpg'
import hus4_tumb from './img/hus4_tumb.jpg'
import hus5_tumb from './img/hus5_tumb.jpg'





export default function Images() {
   const pr = [
      {
        original:   hus1,
        thumbnail: hus1_tumb,
      },
      {
        original: hus2,
        thumbnail: hus2_tumb,
      },
      {
        original: hus3,
        thumbnail: hus3_tumb,
      },
      {
         original: hus4,
         thumbnail: hus4_tumb,
       },
       {
         original: hus5,
         thumbnail: hus5_tumb,
       },
    ];

   return (
      <div>
          <ImageGallery
           items={pr}
           autoPlay={true}
           showFullscreenButton={false}
           showNav={false}
           lazyLoad={true}
           showPlayButton={false}
           slideInterval={15000}
            />
      </div>
   )
}
