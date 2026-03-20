import React from "react";
import "./css/StudentTeam.css";
import yugant from 'assets/images/StudentTeam/20-21/Yugant.jpeg'
import kanny from 'assets/images/StudentTeam/20-21/Ka.jpg'
import hemant from 'assets/images/StudentTeam/20-21/Hemant.jpg'
import archi_a from 'assets/images/StudentTeam/20-21/archi.jpeg'
import noor from 'assets/images/StudentTeam/20-21/Noor.png'
import nikhil from 'assets/images/StudentTeam/20-21/Nikhil.jpeg'
import piyush from 'assets/images/StudentTeam/20-21/Piyush.jpg'
import Ujjawal from 'assets/images/StudentTeam/20-21/Ujjawal.jpg'
import Saakshi from 'assets/images/StudentTeam/20-21/Saakshi.jpg'
import Saket from 'assets/images/StudentTeam/20-21/Saket.jpg'
import Shagun from 'assets/images/StudentTeam/20-21/Shagun.jpg'
import Shashank from 'assets/images/StudentTeam/20-21/Shashank.jpg'
import Gaurangi from 'assets/images/StudentTeam/20-21/Gaurangi.jpg'
import Nitin from 'assets/images/StudentTeam/20-21/Nitin.jpg'
import Adarsh from 'assets/images/StudentTeam/20-21/Adarsh.jpg'
import Sheetal from 'assets/images/StudentTeam/20-21/Sheetal.jpg'
import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { BsFillHeartFill } from 'react-icons/bs';
export const Team2021 = () => {
  return (
    <>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Central Team 2020-21</h1>
        <Row>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={yugant}
              name="Yugant Kumar"
              pos="Team Leader"
              // email="Email: shubham_p@mt.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shubham-pal-924b34205"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={hemant}
              name="Hemant Singh Adhikari"
              pos="Overall Co-ordinator for Operations"
              // email="Email: archi_g@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/archi-gupta-7937b320b"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={kanny}
              name="Kanhaiya Maddhesiya"
              pos="Overall Initiative Leader"
              // email="Email: mohit_u@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/mohit-umraiya-966911200"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={archi_a}
              name="Archi Agrawal"
              pos="Overall Co-ordinator for Media and Outreach"
              // email="Email: rohini_s@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/rohini-shrivastava-98288a204"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={noor}
              name="Noor Nisha"
              pos="Overall Co-ordinator for Documentation"
              // email="Email: ramandeep_s@ee.iitr.ac.in"
              linkedIn="http://linkedin.com/in/ramandeep-singh-b79199205"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={nikhil}
              name="Nikhil Agrawal"
              pos="Overall Co-ordinator for Finance"
              // email="Email: srishti_m@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/srishti-mishra-316ab3235"
            />
            <br />
          </div>

          <h1 className="text-center headingStudent1 my-5">Village Team</h1>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={piyush}
              name="Piyush Yadav"
              pos="Village Co-ordinator"
              village="Beladi"
              // email="Email: khushi_k@mt.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/khushi-kumawat-7b2697204"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Ujjawal}
              name="Ujjawal Garg"
              pos="Village Co-ordinator"
              village="Beladi"
              // email="Email: udit_m@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/udit-mimani-413000208"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Saakshi}
              name="Saakshi Choudhary"
              pos="Village Co-ordinator"
              village="Chandpur"
              // email="Email: ani_j@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/ani-jeenwal-b89530223"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Saket}
              name="Saket Priyam"
              pos="Village Co-ordinator"
              village="Chandpur"
              // email="Email: kinshu_k@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kinshu-kumar-4bb67a19a"
            />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Shagun}
              name="Shagun Goyal"
              pos="Village Co-ordinator"
              village="Chharba"
              // email="Email: ashish_s@cy.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/ashish-singh-567825240"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Shashank}
              name="Shashank Gangwar"
              pos="Village Co-ordinator"
              village="Chharba"
              // email="Email: shailja_g@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shailja-gupta-01b196206"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Gaurangi}
              name="Gaurangi Katharya"
              pos="Village Co-ordinator"
              village="Meerpur"
              // email="Email: bada_k@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kavya-bada-a49394200"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Nitin}
              name="Nitin Kumar"
              pos="Village Co-ordinator"
              village="Meerpur"
              // email="Email: pratyaksh_c@ce.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/pratyaksh-chauhan-20835620a"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Adarsh}
              name="Adarsh Singh"
              pos="Village Co-ordinator"
              village="Puranpur"
              // email="Email: pratibha_p@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/pratibha-pragya-181545152"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Sheetal}
              name="Sheetal Ojha"
              pos="Village Co-ordinator"
              village="Puranpur"
              // email="Email: abhishek_s2@ce.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/abhishek-singh-6b5a4b213"
            />
            <br />
          </div>
        </Row>
        <br />
        <br />
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
        <br />
        <br />
      </Container>
    </>
  );
};