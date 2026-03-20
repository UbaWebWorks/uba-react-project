//kmkm
import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import PDF from "assets/docs/UBA Newsletter 21-22.pdf"
import map1 from "assets/images/Meerpur/map1.jpg";
import map2 from "assets/images/Meerpur/map2.jpg";
import init9 from "assets/images/Meerpur/ICT_Meerpur/1.png";
import init10 from "assets/images/Meerpur/ICT_Meerpur/2.png";
import init11 from "assets/images/Meerpur/ICT_Meerpur/4.png";
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { InitCard } from 'features/home/js/InitCard';


export const Meerpur = () => {
  // Define missing variables
  const Divya = {};
  const Anand = {};
  const Harsh_jha = {};

  return (
    <>
      <div>
        <Row>
          <div className="container tittle1 bg-overlay1">
            <div className="my-5" style={{ textAlign: "center" }}>
              <h3>MEERPUR</h3>
              <p><a href="/" style={{textDecoration:"None",color:"grey"}}>HOME</a>/VILLAGE/MEERPUR</p>
            </div>
          </div>
        </Row>
        <Row>
          <section className="how-can-help1 what-we1">
            <div className="container tittle1">
              <Row>
                <Col className="col-md-8 with-map1">
                  <span className="big-text1">
                    <small>About Meerpur</small>
                  </span>
                  <hr
                    style={{
                      width: "7rem",
                      height: "0.3rem",
                      background: "#ecc731",
                      opacity: "1",
                    }}
                  />
                  <p align="justify">
                    The Meerpur Muwazarpur village has population of 3061 of
                    which 1589 are males while 1472 are females as per
                    Population Census 2011.The population of children in the age
                    group of 0-6 is 450 which makes up 14.70 % of total
                    population of village. Average Sex Ratio of Meerpur
                    Muwazarpur village is 926 which is lower than Uttrakhand
                    state average of 963. Child Sex Ratio for the Meerpur
                    Muwazarpur as per 2011 census is 1009, higher than
                    Uttarakhand average of 890.
                  </p>
                  <p align="justify">
                    Meerpur Muwazarpur village has lower literacy rate compared
                    to Uttarakhand. In 2011, literacy rate of Meerpur Muwazarpur
                    village was 76.91 % compared to 78.82 % of Uttarakhand. In
                    Meerpur Muwazarpur Male literacy stands at 84.18 % while
                    female literacy rate was 68.94 %..
                  </p>
                  <p></p>
                </Col>

                <div  style={{alignItems:'center',alignContent:'center',width:'full' , marginTop:'2rem'}}>
                <div  style={{alignItems:'center',alignContent:'center'}}>
                  <div className="program1 w-full">
                    <div className="inner1">
                      <h3>
                        Meerpur
                        <br />
                        <br />
                        <span>Village Action PLan</span>
                      </h3>
                      <a href={PDF} className="btn btn-1" target="_blank"  >
                        FOR MORE DETAILS
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </Row>
            </div>
          </section>
        </Row>
        <Row>
          <Row>
            <div className="tittle1" style={{ textAlign: "center" }}>
              <h2>Village Details</h2>
              <p>Comprehensive data about the village.</p>
            </div>
          </Row>
          <Col className="my-5" md={{ span: 4, offset: 2 }}>
            <div className="my-2" style={{ textAlign: "center" }}>
              <h4> Location</h4>
            </div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>State</td>
                  <td>Uttarakhand</td>
                </tr>
                <tr>
                  <td>District</td>
                  <td>Haridwar</td>
                </tr>
                <tr>
                  <td>Gram Panchayat</td>
                  <td>Meerpur Muwazarpur</td>
                </tr>
                <tr>
                  <td>Village Head/Pradhan</td>
                  <td>Reena</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>Roorkee</td>
                </tr>
                <tr>
                  <td>Bahadarabad</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Police Station</td>
                  <td>--</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="my-5" md={{ span: 4 }}>
            <div className="my-2" style={{ textAlign: "center" }}>
              <h4> Demography</h4>
            </div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Total</th>
                  <th>Male</th>
                  <th>Female</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total no. of Houses</td>
                  <td>542</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>3061</td>
                  <td>1589</td>
                  <td>1472</td>
                </tr>
                <tr>
                  <td>Child (0-6)</td>
                  <td>450</td>
                  <td>224</td>
                  <td>226</td>
                </tr>
                <tr>
                  <td>Schedule Caste</td>
                  <td>141</td>
                  <td>78</td>
                  <td>63</td>
                </tr>
                <tr>
                  <td>Schedule Tribes</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Literacy</td>
                  <td>76.91%</td>
                  <td>84.18%</td>
                  <td>68.94%</td>
                </tr>
                <tr>
                  <td>Total Workers</td>
                  <td>898</td>
                  <td>820</td>
                  <td>78</td>
                </tr>
                <tr>
                  <td>Main Workers</td>
                  <td>479</td>
                  <td>449</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Marginal Workers</td>
                  <td>791</td>
                  <td>729</td>
                  <td>62</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
      <Row className="tittle1">
        <h2 className="text-center my-3">
          Land Use Map & <span>Physical Map</span>
        </h2>
        <p className="text-center">
          Mapped data of land use and area of the village.
        </p>
        <br />
        <p className="text-center">
          <b>Land Use Map</b>
        </p>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <img className="center video-blog1" src={map1} />
        </Col>
        <Col md={12} lg={6}>
          <img className="center video-blog1" src={map2} />
        </Col>
      </Row>
      <br />
      <br />

    
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Initiatives</h1>
        <div className="row">
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init11}
                village="Meerpur |"
                date="July 31, 2021"
                init="Book Distribution"
                initiative="Distributed NCERT books to students of class 6th to 12th."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init10}
                village="Meerpur |"
                date="September 13, 2020"
                init="Science Session"
                initiative="Created awareness about applications of science in daily life."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init9}
                village="Meerpur |"
                date="August 30, 2020"
                init="Gov. Schemes Awareness"
                initiative="Created awareness about various government schemes among villagers."
              />
              <br />
            </center>
          </div>
        </div>
      </Container>
      <Container style={{ background: "#f7f8f9",alignContent:'center' }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
        <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Divya}
              name="Divya Aggarwal"
              pos="Village Co-ordinator"
              village="Meerpur"
              email="Email: d_aggarwal@hs.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/divya-aggarwal-28bb3122a"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Anand}
              name="Anand Kumar"
              pos="Village Co-ordinator"
              village="Meerpur"
              email = "Email: a_kumar9@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/anand-kumar-23a170224/"
            />
            <br />
          </div>
          <div className="col-lg-5" id ="last-element" style={{ margin : "auto" }}>
          <StudentIdentityCard
              studImg={Harsh_jha}
              name="Harsh Kumar Jha"
              pos="Village Co-ordinator"
              village="Meerpur"
              email = "Email: h_kjha@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/harsh-kumar-jha-369303220"
            />
            <br />
          </div>
        </Row>
      </Container>
      <Row className="text-center my-4">
        <h2>
          Be the change <i style={{ color: "#ecc731" }} className="fa fa-heart"></i>{" "}
          <strong>You wish to see</strong>.
        </h2>
      </Row>
    </>
  );
};
