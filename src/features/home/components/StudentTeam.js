import React from "react";
import "./css/StudentTeam.css";
import HIMANSHU from "assets/images/StudentTeam/HimanshuRanjan.jpg";
import Kishan from "assets/images/StudentTeam/Kishan_Kashyap.jpg";
import Komalpreet from "assets/images/StudentTeam/Komalpreet.jpg"


import Shubhanshu from "assets/images/StudentTeam/Shbanshu_Shukla.jpg";
import Null from "assets/images/StudentTeam/Null.jpeg";
import Anuj from "assets/images/StudentTeam/Anuj.jpeg"
import Shreya from "assets/images/StudentTeam/Shreya.jpg";
import Rishabh from "assets/images/StudentTeam/Rishabh.jpeg";

import Charu from "assets/images/StudentTeam/Charu.jpg";

import Gautum from "assets/images/StudentTeam/Gautum.jpg";
import ShubhamK from "assets/images/StudentTeam/Shubham_kumar.jpg"
import Hemant from "assets/images/StudentTeam/Hemant.jpg"
import Divya from "assets/images/StudentTeam/Divya_agr.jpg";

import Harshit from "assets/images/StudentTeam/Harshit.jpeg";

import Ayush from "assets/images/StudentTeam/Ayush.jpg"
import Jyoti from "assets/images/StudentTeam/Jyoti.jpg";



import Radhika from "assets/images/StudentTeam/Radhika_agr.jpg";
import Harsh_jha from "assets/images/StudentTeam/Harsh_Jha.jpg"
import Anand from "assets/images/StudentTeam/Anand.jpg"
import Rasika from "assets/images/StudentTeam/Rasika.jpeg"

import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { BsFillHeartFill } from 'react-icons/bs';
export const StudentTeam = () => {
  return (
    <>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Central Team</h1>
        <Row>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Shreya}
              name="Shreya Mittal"
              pos="Team Leader"
              email="Email: s_mittal@ce.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shreya-mittal-287298249"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Ayush}
              name="Ashish Goyal"
              pos="Overall Student Coordinator"
              email="Email: a_goyal@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/ashish-goyal-45a5a8208/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Harshit}
              name="Harshit Kumar"
              pos="Overall Co-ordinator for Media and Public Relations"
              email="Email: h_kumar@mt.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/harshit-kumar-189b901a0"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={HIMANSHU}
              name="Himanshu Ranjan"
              pos="Overall Documentation Coordinator"
              email="Email: h_ranjan@ece.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/himanshu-r-24978a130/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Shubhanshu}
              name="Shubhanshu Shukla"
              pos="Overall Finance Coordinator "
              email="Email: s_shukla@hs.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shubhanshu-shukla-195068203"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Gautum}
              name="Gautam Kumar"
              pos="Head (Agriculture & Waste Management) "
              email="Email: g_kumar1@ce.iitr.ac.in"
              linkedIn="http://www.linkedin.com/in/gautam-kumar-a83bb3223"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Hemant}
              name="Hemant Bidasaria"
              pos="Head (Self Help Groups)"
              email="Email: h_bidasaria@hs.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/hemant-bidasaria-068677223"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Kishan}
              name="Kishan Kashyap"
              pos="Head (Water Management & Education)"
              email="Email: K_kashyap@ph.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kishan-kashyap-9b5555227"
            />
            <br />
          </div>

          <h1 className="text-center headingStudent1 my-5">Village Team</h1>
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
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={ShubhamK}
              name="Shubham Kumar"
              pos="Village Co-ordinator"
              village="Gopalpur"
              email="Email: s_kumar5@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shubham-kumar-305b52240"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Rasika}
              name="Rasika Kaple"
              pos="Village Co-ordinator"
              village="Gopalpur"
              linkedIn="https://www.linkedin.com/in/rasikakaple/"
              email = "Email: k_rdnyaneshwar@me.iitr.ac.in"
              />
            <br />
          </div>
         
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Anuj}
              name="Anuj Kumar"
              pos="Village Co-ordinator"
              village="Puranpur"
              email="Email: a_kumar4@cy.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/anuj-kumar-1aa590230"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Charu}
              name="Charu Sahu"
              pos="Village Co-ordinator"
              village="Puranpur"
              email = "Email: c_sahu@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/charusahu"
            />
            <br />
          </div>
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
        <br />
        <br />
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
        <br />
        <br />
      </Container>
    </>
  );
};
