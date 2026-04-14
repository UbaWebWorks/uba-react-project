import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import PDF from "assets/docs/UBA Newsletter 21-22.pdf"
import map1 from "assets/images/Beladi/map1.jpg"
import init6 from "assets/images/Beladi/CycleDonation/1.jpg"
import init7 from "assets/images/Beladi/CycleDonation/2.jpg"
import sci from "assets/images/Beladi/CattleVaccination/1.jpg"
import Jyoti from "assets/images/StudentTeam/Jyoti.jpg"
import Rishabh from "assets/images/StudentTeam/Rishabh.jpeg"
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { InitCard } from 'features/home/js/InitCard';
import '../css/Villages.css'

export const Beladi = () => {
  return (
    <>
      <div  style={{alignContent:'center' , alignItems:'center' }}>
        <Row>
          <div className="container tittle1 bg-overlay1" >
            <div className="my-5" style={{ textAlign: "center" }}>
              <h3>BELADI</h3>
              <p><a href="/" style={{textDecoration:"None",color:"grey"}}>HOME</a>/VILLAGE/BELADI</p>
            </div>
          </div>
        </Row>
        <Row>
          <section className="how-can-help1 what-we1">
            <div className="container tittle1"  >
              <Row>
                <Col className="col">
                  <span className="big-text1">
                    <small>About Beladi</small>
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
                    Beladi Salhapur village is located in the Roorkee block of
                    Haridwar district. The village is governed by Beladi
                    Salhapur Gram Panchayat. Its location code or village code
                    No. is 056436 (according to census 2011). It is at a
                    distance of 7 km from Roorkee and about 350m from NH-58
                    which connects Roorkee to Haridwar. The nearest major
                    Railway stations are Roorkee and Haridwar Junction.
                  </p>
                  <p align="justify">
                    The total geographical area of the village is 248.77
                    hectares. Beladi Salhapur has a total population of
                    2500(approx.). The village consists of two sub-villages. The
                    first one, known as ‘Old Beladi Salhapur’ is located on the
                    right-hand side of the main road (Roorkee to Haridwar) and
                    consists of approximately 450 households, and the other,
                    known as ‘New Beladi Salhapur’ about 200m away.
                  </p>
                  <p>
                    Nearly 70 per cent of the villagers are engaged in
                    agriculture or agriculture related work, however the number
                    of big farmers is very less, as majority of the farmers are
                    low scale farmers. 20-25 % people work as agriculture and
                    construction workers and the rest are engaged in either
                    dairy or selling other animal products’ and a very few of
                    them employed in the service sector (private companies
                    etc.).
                  </p>
                  <p>
                    There are two Government schools in this village for boys
                    and girls. There is one Co-operative Society (more of a Self
                    Help Group) in this village which provides loan to the
                    villagers, however this society doesn’t function smoothly
                    due to the lack of money within the group. Majority of the
                    population are Scheduled Castes (SCs). The village has
                    mainly two Castes, i.e. “Rhods” and “Sainis”. Apart from the
                    houses of a few Upper Caste people, majority of the houses
                    are made with bricks and have 1-2 rooms. The main source of
                    drinking water are the hand pumps (groundwater) installed
                    almost at every house. Public water taps are also installed
                    by the Government. The number of such taps is around 20-30.
                    But the taps remain dry most of the time as testified by the
                    villagers. The home cleanliness level is decent but the
                    village sanitation, cleanliness of ponds and other water
                    bodies, the public drains and the scattered waste around the
                    village presents a governance issue in the village.
                  </p>

                  <p></p>
                </Col>
                <div  style={{alignItems:'center',alignContent:'center',width:'full' , marginTop:'2rem'}}>
                <div  style={{alignItems:'center',alignContent:'center'}}>
                  <div className="program1 w-full">
                    <div className="inner1">
                      <h3>
                        Beladi 
                        <br />
                        <br />
                        <span>Village Action PLan</span>
                      </h3>
                      <a href={PDF} target = "_blank" className="btn btn-1">
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
                  <td> Beladi Salhapur</td>
                </tr>
                <tr>
                  <td>Village Head/Pradhan</td>
                  <td>Pinki</td>
                </tr>
                <tr>
                  <td>Block</td>
                  <td>Roorkee</td>
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
                  <td>340</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>1860</td>
                  <td>1001</td>
                  <td>859</td>
                </tr>
                <tr>
                  <td>Child (0-6)</td>
                  <td>309</td>
                  <td>172</td>
                  <td>137</td>
                </tr>
                <tr>
                  <td>Schedule Caste</td>
                  <td>1263</td>
                  <td>675</td>
                  <td>588</td>
                </tr>
                <tr>
                  <td>Schedule Tribes</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Literacy</td>
                  <td>60.16%</td>
                  <td>68.03%</td>
                  <td>50.98%</td>
                </tr>
                <tr>
                  <td>Total Workers</td>
                  <td>504</td>
                  <td>469</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Main Workers</td>
                  <td>479</td>
                  <td>449</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Marginal Workers</td>
                  <td>25</td>
                  <td>20</td>
                  <td>5</td>
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
                image={sci}
                village="Beladi |"
                date='Sept 21, 2023'
                init="Science Experiment Exhibition"
                moreDetails="Team UBA, IIT Roorkee organised a science experiment exhibition at the Govt. Secondary School, Beladi-Salhapur."
              />
              <br />
            </center>
          </div>

          <div className="col-lg-4">
            <center>
              <InitCard
                image={init7}
                village="Beladi |"
                date="July 31, 2021"
                init="Book Distribution Drive"
                moreDetails="Books Distribution carried out in village Beladi."
              />
              <br />
            </center>
          </div>
          <div className="col-lg-4">
            <center>
              <InitCard
                image={init6}
                village="Beladi |"
                date="October 12, 2019"
                init="Cycle Donation"
                initiative="Donating unused cycles at IITR to village students in Beladi."
              />
              <br />
            </center>
          </div>
        </div>
      </Container>
      <Container style={{ background: "#f7f8f9" , alignContent:'center',alignItems:'center' }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
        <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Jyoti}
              name="Jyotsna Singh"
              pos="Village Co-ordinator"
              village="Beladi"
              email="Email: j_singh@ph.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/jyotsna-singh-072ba4230"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Rishabh}
              name="Rishabh Kosta"
              pos="Village Co-ordinator"
              village="Beladi"
              email = "Email: r_kosta@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/rishabh-kosta-39703b237/overlay/photo/"
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
