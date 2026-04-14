import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { InitCard } from 'features/home/js/InitCard';
import map1 from "assets/images/chharba_uttarakhand_uba_landuse_map.jpg";
import PDF from "assets/docs/UBA Newsletter 21-22.pdf";
import init1 from "assets/images/Beladi/CycleDonation/1.jpg";
import init2 from "assets/images/Beladi/CycleDonation/2.jpg";
import init3 from "assets/images/Beladi/SelfDefence/1.jpeg";
import Komalpreet from "assets/images/StudentTeam/Komalpreet.jpg";
import Radhika from "assets/images/StudentTeam/Radhika_agr.jpg";
import '../css/Villages.css'


export const Rithaura = () => {
  return (
    <>
      <div>
        <Row>
          <div className="container tittle1 bg-overlay1">
            <div className="my-5" style={{ textAlign: "center" }}>
              <h3>RITHAURA-GRUNT</h3>
              <p><a href="/" style={{textDecoration:"None",color:"grey"}}>HOME</a>/VILLAGE/RITHAURA-GRUNT</p>
            </div>
          </div>
        </Row>
        <Row>
          <section className="how-can-help1 what-we1">
            <div className="container tittle1">
              <Row>
                <Col className="col">
                  <span className="big-text1">
                    <small>About Rithaura-Grunt</small>
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
                  Rithaura-Grunt is a large village located in the Vikasnagar block
                    of Dehradun district, Uttarakhand with a total of 1425
                    families residing. According to Census 2011, the location
                    code or village code of Rithaura-Grunt village is 045088. Rithaura-Grunt
                    covers an area of about 1567.9 hectares. It is situated 7km
                    away from sub-district headquarter Vikasnagar and 22km away
                    from district headquarter Dehradun. Herbertpur is nearest
                    town to Rithaura-Grunt which is approximately 6km away. As per 2009
                    stats, Rithaura-Grunt is the gram panchayat of Rithaura-Grunt village.
                  </p>
                  <p align="justify">
                  Rithaura-Grunt, inspite of being in Uttarakhand, is devoid of tough
                    and rocky terrains. It is in the foothills of the Himalayan
                    Terrains. Because of this, it is fairly accessible and can
                    be reached easily. Rithaura-Grunt is primarily divided into 3
                    parts, lower Rithaura-Grunt, middle Rithaura-Grunt, and upper Rithaura-Grunt.
                    This divide is a road branching out from NH72 passing
                    through Rithaura-Grunt. After Upper Rithaura-Grunt, the hilly terrains of
                    Uttarakhand take shape.
                  </p>
                  <p align="justify">
                  Children of Rithaura-Grunt can receive education in 4 primary
                    schools, 3 madrasas, 1 Government Inter College (GIC), and
                    multiple private schools in and out of the village. All in
                    all, most children receive education and hence are more
                    aware of the role of the upcoming generation of teenagers in
                    the shaping of the country.
                  </p>
                  <p align="justify">
                  Schedule Caste (SC) constitutes 5.78 % while Schedule Tribe
                    (ST) are 0.28 % of total population in Rithaura-Grunt village. In
                    Rithaura-Grunt village out of the total population, 1935 were
                    engaged in working activities.
                  </p>
                  <p align="justify">
                  One of the prime ingredients for growth of a place is
                    present in Rithaura-Grunt. That factor is religious and cultural
                    diversity. Although the majority of people are Hindus, there
                    are about 40% Muslims and 3% Sikhs. But, the village lags
                    behind the state in gender ratio. The average sex ratio in
                    Uttarakhand is 963, while in Rithaura-Grunt it is just 918.
                  </p>
                  <p align="justify">
                  The village has all the primary shops, including clothing,
                    food, stationary and general appliances. It also has a
                    branch of PNB bank. This means that almost every family in
                    the village, not every adult, has a bank account and a debit
                    card in their name.
                  </p>
                  <p></p>
                </Col>

                <div  style={{alignItems:'center',alignContent:'center',width:'full' , marginTop:'2rem'}}>
                <div  style={{alignItems:'center',alignContent:'center'}}></div>
                  <div className="program1 w-full">
                    <div className="inner1">
                      <h3>
                        Rithaura-Grunt
                        <br />
                        <br />
                        <span>Village Action PLan</span>
                      </h3>
                      <a href={PDF} className="btn btn-1">
                        FOR MORE DETAILS
                      </a>
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
                  <td>Rithaura-Grunt Muwazarpur</td>
                </tr>
                <tr>
                  <td>Village Head/Pradhan</td>
                  <td>Seema Devi</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>Sahaspur</td>
                </tr>
                <tr>
                  <td>Block Officer</td>
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
                  <td>1425</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>7628</td>
                  <td>3790</td>
                  <td>3478</td>
                </tr>
                <tr>
                  <td>Child (0-6)</td>
                  <td>1013</td>
                  <td>536</td>
                  <td>477</td>
                </tr>
                <tr>
                  <td>Schedule Caste</td>
                  <td>420</td>
                  <td>228</td>
                  <td>192</td>
                </tr>
                <tr>
                  <td>Schedule Tribes</td>
                  <td>20</td>
                  <td>9</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Literacy</td>
                  <td>76.80%</td>
                  <td>82.73%</td>
                  <td>70.38%</td>
                </tr>
                <tr>
                  <td>Total Workers</td>
                  <td>1935</td>
                  <td>1737</td>
                  <td>198</td>
                </tr>
                <tr>
                  <td>Main Workers</td>
                  <td>1381</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Marginal Workers</td>
                  <td>554</td>
                  <td>493</td>
                  <td>61</td>
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
      <img className="center video-blog1" src={map1} />
      <br />
      <br />

      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Initiatives</h1>
        <div className="row">
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init3}
                village="Rithaura-Grunt |"
                date="September 17, 2019"
                init="Self Defence Camp"
                initiative="In collaboration with Taekwondo Team IITR, empowered village school girls in personal safety."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init1}
                village="Rithaura-Grunt |"
                date="February 2, 2019"
                init="Cycle Donation"
                initiative="Unused cycles at IITR donated to needy students in village Rithaura-Grunt."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init2}
                village="Rithaura-Grunt |"
                date="February, 2019"
                init="ICT Initiative"
                initiative="Team UBA introduced the students of primary schools of Rithaura-Grunt with basics of computers."
              />
              <br />
            </center>
          </div>
        </div>
      </Container>
      <Container style={{ background: "#f7f8f9" , alignContent:'center' }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
        <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Komalpreet}
              name="Komalpreet Kaur"
              pos="Village Co-ordinator"
              village="Rithaura-Grunt"
              email="Email: k_kaur@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/jyotsna-singh-072ba4230"
            />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Radhika}
              name="Radhika Agarwal"
              pos="Village Co-ordinator"
              village="Rithaura-Grunt"
              email = "Email: r_agarwal@hs.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/radhika-agarwal-08a919229/"
            />
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