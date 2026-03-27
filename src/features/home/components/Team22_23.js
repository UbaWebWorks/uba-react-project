import React from "react";
import "./css/StudentTeam.css";
import Shubham from "assets/images/StudentTeam/Shubham.jpg";
import Mohit from "assets/images/StudentTeam/Mohit.jpg";
import Archi from "assets/images/StudentTeam/Archi.jpg";
import Rohini from "assets/images/StudentTeam/Rohini.jpg";
import Kritika from "assets/images/StudentTeam/Kritika.JPG";
import Prakhar from "assets/images/StudentTeam/Prakhar.jpg";
import Khushi from "assets/images/StudentTeam/Khushi.jpg";
import Ani from "assets/images/StudentTeam/Ani.jpg";
import Kinshu from "assets/images/StudentTeam/Kinshu.jpg";
import Pratibha from "assets/images/StudentTeam/Pratibha.jpg";
import Kavya from "assets/images/StudentTeam/Kavya.jpg";
import Ashish from "assets/images/StudentTeam/Ashish.jpeg";
import Abhishek from "assets/images/StudentTeam/Abhishek.jpg";
import Udit from "assets/images/StudentTeam/Udit.jpeg";
import Srishti from "assets/images/StudentTeam/Srishti.JPG";
import Shailja from "assets/images/StudentTeam/Shailja.jpg";
import Pratyaksh from "assets/images/StudentTeam/Pratyaksh.jpg";
import Ramandeep from "assets/images/StudentTeam/Ramandeep.jpg";
import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { BsFillHeartFill } from 'react-icons/bs';
export const Team22_23 = () => {
  return (
    <>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Central Team 2022-23</h1>
        <Row>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Shubham}
              name="Shubham Pal"
              pos="Team Leader"
              email="Email: shubham_p@mt.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shubham-pal-924b34205"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Mohit}
              name="Mohit Umraiya"
              pos="Overall Student Coordinator"
              email="Email: mohit_u@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/mohit-umraiya-966911200"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Archi}
              name=" Archi Gupta"
              pos="Overall Co-ordinator for Media and Outreach"
              email="Email: archi_g@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/archi-gupta-7937b320b"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Rohini}
              name="Rohini Shrivastava"
              pos="Overall Co-ordinator for Documentation"
              email="Email: rohini_s@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/rohini-shrivastava-98288a204"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Ramandeep}
              name="Ramandeep Singh"
              pos="Overall Co-ordinator for Finance "
              email="Email: ramandeep_s@ee.iitr.ac.in"
              linkedIn="http://linkedin.com/in/ramandeep-singh-b79199205"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Srishti}
              name="Srishti Mishra"
              pos="Head (Agriculture & Waste Management) "
              email="Email: srishti_m@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/srishti-mishra-316ab3235"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Kritika}
              name="Kritika Paliwal"
              pos="Head (Self Help Groups) "
              email="Email: kritika_p@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kayp"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Prakhar}
              name="Prakhar Surana"
              pos="Head (Water Management & Education)"
              email="Email: prakhar_s@ece.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/prakhar-surana-36b4ba1b4"
            />
            <br />
          </div>

          <h1 className="text-center headingStudent1 my-5">Village Team</h1>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Khushi}
              name="Khushi Kumawat"
              pos="Village Co-ordinator"
              village="Beladi"
              email="Email: khushi_k@mt.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/khushi-kumawat-7b2697204"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Udit}
              name="Udit Mimami"
              pos="Village Co-ordinator"
              village="Beladi"
              email="Email: udit_m@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/udit-mimani-413000208"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Ani}
              name="Ani Jeenwal"
              pos="Village Co-ordinator"
              village="Gopalpur"
              email="Email: ani_j@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/ani-jeenwal-b89530223"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Kinshu}
              name="Kinshu Kumar"
              pos="Village Co-ordinator"
              village="Gopalpur"
              email="Email: kinshu_k@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kinshu-kumar-4bb67a19a"
            />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Ashish}
              name="Ashish Singh"
              pos="Village Co-ordinator"
              village="Rithaura Grunt"
              email="Email: ashish_s@cy.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/ashish-singh-567825240"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Shailja}
              name="Shailja Gupta"
              pos="Village Co-ordinator"
              village="Rithaura Grunt"
              email="Email: shailja_g@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shailja-gupta-01b196206"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Kavya}
              name="Kavya Bada"
              pos="Village Co-ordinator"
              village="Meerpur"
              email="Email: bada_k@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kavya-bada-a49394200"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Pratyaksh}
              name="Pratyaksh Chauhan"
              pos="Village Co-ordinator"
              village="Meerpur"
              email="Email: pratyaksh_c@ce.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/pratyaksh-chauhan-20835620a"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Pratibha}
              name="Pratibha Pragya"
              pos="Village Co-ordinator"
              village="Puranpur"
              email="Email: pratibha_p@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/pratibha-pragya-181545152"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Abhishek}
              name="Abhishek Singh"
              pos="Village Co-ordinator"
              village="Puranpur"
              email="Email: abhishek_s2@ce.iitr.ac.in"
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