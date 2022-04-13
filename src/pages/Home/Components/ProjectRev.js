import React, { useContext } from "react";
import { Row, Col } from "antd";
import { Typography } from "@material-ui/core";
import { Container } from "semantic-ui-react";
import ListingDetails from "../../../Components/ListingDetails";
import Images from "./ImageGallery";

import { AppContextData } from "../../../Context/ContextData";

export default function ProjectRev() {
  const { toggleListingDrawer } = useContext(AppContextData);
  return (
    <Container>
      <section>
        <Row className="devider">
          <Col lg={12} xs={24}>
            <Typography variant="h4">Current Projects</Typography>
          </Col>
        </Row>
      </section>
      <Row></Row>
      <Row justify="space-around" align="top">
        <Col lg={{ span: 10, order: 1 }} xs={{ span: 24, order: 2 }}>
          <Images />
        </Col>
        <Col lg={{ span: 12, order: 2, offset: 2 }} xs={{ span: 24, order: 1 }}>
          <Typography variant="h5" className="devider">
            Dorado Beach, Puerto Rico
          </Typography>
          <Typography variant="body1">
            This property is located in exclusive{" "}
            <a
              style={{ color: "#201e1f", textDecoration: "underline" }}
              href="https://www.ritzcarlton.com/en/hotels/puerto-rico/dorado-beach/hotel-overview?fbclid=IwAR3it7c-AythbuknU1G6PsKZ3q9PKPXMD2cbB7_Oc8a3MRUpOagcw9MOWoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dorado Beach
            </a>{" "}
            , a Ritz Carlton Reserve in Puerto Rico. It is an unique property
            that was built from precast concrete forms.
          </Typography>
          <Typography variant="body1">
            This estate has been completely gutted and re-imagined with major
            structural alternations and additions. The end product will result
            in a spacious 7 bedroom Estate with high end, energy efficient
            materials and systems in a prime location, with a large private lot
            with ocean views.
          </Typography>
          <div className="deviderHalf"></div>
          <div className="listDetailButton">
            <div onClick={() => toggleListingDrawer(true)}>More Info</div>
          </div>
        </Col>
        <Col lg={{ span: 14, order: 3, push: 9 }} xs={{ span: 24, order: 3 }}>
          <ListingDetails />
        </Col>
      </Row>
      <Row className="devider"></Row>
      <div className="listDetailButtonMobile">
        <div onClick={() => toggleListingDrawer(true)}>More Info</div>
      </div>
    </Container>
  );
}
