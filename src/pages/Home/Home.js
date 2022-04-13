import React, { useState, useContext, useEffect } from "react";
// import Project from './Components/Project'
import ProjectRev from "./Components/ProjectRev";
import About from "../About/About";
import { Row, Col } from "antd";
import { Typography } from "@material-ui/core";
import { Container } from "semantic-ui-react";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { AppContextData } from "../../Context/ContextData";
import Logo from "../../images/logo_svg.svg";

import Listings from "../../Components/Listings";
import Portfolio from "../../Components/Portfolio";

export default function Home() {
  const [scroller, displayScroller] = useState(true);
  const {
    toggleContactDrawer,
    toggleListings,
    togglePortfolio,
    listings,
    portfolio
  } = useContext(AppContextData);

  // Hide scroll animation on scroll.
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 200) {
        displayScroller(false);
      }
    };
  }, []);

  return (
    <>
      <section className="splashImage">
        <Container>
          <Row justify="center">
            <Col lg={{ span: 24 }} className="splashTextMargin">
              <div className="spashTextPad">
                <div className="logoHolder" style={{ textAlign: "center" }}>
                  <img src={Logo} alt="Nima Logo" className="logo" />
                </div>
              </div>
              <div className="subTextPad">
                <Typography variant="body1" className="subText ">
                  Nima Development is a real estate development firm
                  specializing in contemporary residential construction.
                </Typography>
                <Typography variant="body1" className="subText deviderHalf">
                  We design and build homes with a focus on energy efficient
                  building envelopes, a healthy indoor environment, operational
                  energy conservation with integration of solar PV systems where
                  possible.
                </Typography>
              </div>
            </Col>
            <Col>
              {scroller ? (
                <div className="mouse_scroll">
                  <div className="mouse">
                    <div className="wheel"></div>
                  </div>
                  <div>
                    <span className="m_scroll_arrows one"></span>
                    <span className="m_scroll_arrows two"></span>
                    <span className="m_scroll_arrows three"></span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sectionPaddingSplit">
        <Container>
          <Row gutter={[10, 10]}>
            <Col lg={{ span: 8, order: 1 }} xs={12}>
              <div
                className="threeRows iconButtons"
                onClick={() => toggleListings(true)}
              >
                <ImportContactsOutlinedIcon fontSize="inherit" />
                <div className="textColorWhite" style={{ color: "white" }}>
                  <Typography color="inherit" variant="h5">
                    Listings
                  </Typography>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 8, order: 2 }} xs={12}>
              <div
                className="threeRows iconButtons"
                onClick={() => togglePortfolio(true)}
              >
                <HomeWorkIcon fontSize="inherit" />
                <div className="textColorWhite" style={{ color: "white" }}>
                  <Typography color="inherit" variant="h5">
                    Portfolio
                  </Typography>
                </div>
              </div>
            </Col>
            {listings ? (
              <Col lg={{ span: 24, order: 4 }}>
                <Listings />
              </Col>
            ) : (
              ""
            )}
            {portfolio ? (
              <Col lg={{ span: 24, order: 4 }}>
                <Portfolio />
              </Col>
            ) : (
              ""
            )}

            <Col lg={{ span: 8, order: 3 }} xs={24}>
              <div
                className="threeRows iconButtons"
                onClick={() => toggleContactDrawer(true, "NIMA")}
              >
                <ContactMailIcon fontSize="inherit" />
                <div className="textColorWhite" style={{ color: "white" }}>
                  <Typography color="inherit" variant="h5">
                    Contact
                  </Typography>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
            <Project />
         </section> */}
      <section className="sectionPaddingOne">
        <ProjectRev />
      </section>
      <section className="sectionPaddingTwo">
        <About />
      </section>
    </>
  );
}
