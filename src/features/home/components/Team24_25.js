import React from "react";
import "./css/StudentTeam.css";
import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { BsFillHeartFill } from 'react-icons/bs';

import Abhishank from "assets/images/StudentTeam/24-25/Abhishank.jpg";
import Ankit from "assets/images/StudentTeam/24-25/Ankitk.jpg";
import Aman from "assets/images/StudentTeam/24-25/Aman.jpg";
import Atharva from "assets/images/StudentTeam/24-25/Atharv.jpg";
import ankit from "assets/images/StudentTeam/24-25/Ankit.jpg";
import aryan from "assets/images/StudentTeam/24-25/Aryan.jpg";
import jagriti from "assets/images/StudentTeam/24-25/Jagriti.jpg";
import sandeep from "assets/images/StudentTeam/24-25/Sandeep.jpg";
import destiny from "assets/images/StudentTeam/24-25/Destiny.jpg";
import nitin from "assets/images/StudentTeam/24-25/Nitin.jpg";
import ishika from "assets/images/StudentTeam/24-25/Ishika.jpg";
import manishranjan from "assets/images/StudentTeam/24-25/ManishR.jpg";
import radhika from "assets/images/StudentTeam/24-25/Radhika.jpg";
import sumukh from "assets/images/StudentTeam/24-25/Sumukh.jpg";
import gaurvi from "assets/images/StudentTeam/24-25/Gaurvi.jpg";
import harshita from "assets/images/StudentTeam/24-25/Harshita.jpg";
import manish from "assets/images/StudentTeam/24-25/Manish.jpg";
import nancy from "assets/images/StudentTeam/24-25/Nancy.png";

const members = [
    { name: "Ankit Khichar", email: "ankit_k3@ce.iitr.ac.in", pos: "Overall Team Coordinator", linkedIn: "https://www.linkedin.com/in/ankit-khichar-49b827262", studImg: Ankit },
    { name: "Aman Kumar", email: "aman_k@hs.iitr.ac.in", pos: "Overall Student Coordinator", linkedIn: "https://www.linkedin.com/in/aman-kumar-iitr", studImg: Aman },
    { name: "Atharva Sonare", email: "atharva_ns@ece.iitr.ac.in", pos: "Overall Coordinator for Media and Public Relations", linkedIn: "https://www.linkedin.com/in/atharva-sonare-7489011b9", studImg: Atharva },
    { name: "Ankit Lal", email: "ankit_i@ce.iitr.ac.in", pos: "Overall Documentation Coordinator", linkedIn: "https://in.linkedin.com/in/ankit-lal-b68a9b24a", studImg: ankit },
    { name: "Aryan Raj", email: "aryan_r1@ece.iitr.ac.in", pos: "Overall Finance Coordinator", linkedIn: "https://www.linkedin.com/in/aryan-raj-097615257", studImg: aryan },
    { name: "Abhishank Saxena", email: "kunwar_as@ch.iit.ac.in", pos: "Initiative Head (Agriculture, Education & Sanitation)", linkedIn: "https://www.linkedin.com/in/abhishank-saxena-5438ab2a2", studImg: Abhishank },
    { name: "Jagriti Shukla", email: "jagriti_s@ece.iitr.ac.in", pos: "Initiative Head (SHGs)", linkedIn: "https://www.linkedin.com/in/jagriti-shukla-628182250", studImg: jagriti },
    { name: "Sandeep Roy", email: "sandeep_r@ce.iitr.ac.in", pos: "Village Coordinator Beladi", linkedIn: "https://www.linkedin.com/in/sandeep-roy-206964283", studImg: sandeep },
    { name: "Destiny Sharma", email: "destiny_s@mt.iit.ac.in", pos: "Village Coordinator Beladi", linkedIn: "https://uba.iitr.ac.in/www.linkedin.com/in/destiny-sharma-a4a65b25a", studImg: destiny },
    { name: "Nitin", email: "nitin@cy.iitr.ac.in", pos: "Village Coordinator Gopalpur", linkedIn: "https://www.linkedin.com/in/nitin-kumar-4479a4257", studImg: nitin },
    { name: "Ishika Chouhan", email: "ishika_c@me.iitr.ac.in", pos: "Village Coordinator Gopalpur", linkedIn: "https://www.linkedin.com/in/ishika-chouhan-6ba74b260/", studImg: ishika },
    { name: "Sumukh Shrivas", email: "sumukh_s@me.iitr.ac.in", pos: "Village Coordinator Meerpur", linkedIn: "https://www.linkedin.com/in/sumukh-shrivas-065537209", studImg: sumukh },
    { name: "Gaurvi", email: "gaurvi@es.iitr.ac.in", pos: "Village Coordinator Meerpur", linkedIn: "https://www.linkedin.com/in/gaurvi-b1a5a7261", studImg: gaurvi },
    { name: "Manish Ranjan", email: "manish_r@ce.iitr.ac.in", pos: "Village Coordinator Rithaura-Grunt", linkedIn: "https://www.linkedin.com/in/manish-ranjan-ba286a257", studImg: manishranjan },
    { name: "Radhika Verma", email: "radhika_v@me.iitr.ac.in", pos: "Village Coordinator Rithaura-Grunt", linkedIn: "https://www.linkedin.com/in/radhika-verma-444259264", studImg: radhika },
    { name: "Harshita Gill", email: "harshita_g@ce.iitr.ac.in", pos: "Village Coordinator Puranpur", linkedIn: "https://www.linkedin.com/in/harshita-gill-275208251", studImg: harshita },
    { name: "Manish Meena", email: "manish_km@ee.iitr.ac.in", pos: "Village Coordinator Puranpur", linkedIn: "https://www.linkedin.com/in/manish-meena-36aa46325", studImg: manish },
    { name: "Nancy Chouksey", email: "nancy_c@ece.iitr.ac.in", pos: "Village Coordinator Puranpur", linkedIn: "https://www.linkedin.com/in/nancy-chouksey-319661271", studImg: nancy }
];

const Team24_25 = () => {
    return (
        <>
            <Container style={{ background: "#f7f8f9" }}>
                <h1 className="text-center headingStudent1 my-5">Central Team 2024-25</h1>
                <Row>
                    {
                        members.map((member, i) => (
                            <Card
                                key={i}
                                name={member.name}
                                email={member.email}
                                linkedIn={member.linkedIn}
                                pos={member.pos}
                                studImg={member.studImg}
                            />
                        ))
                    }
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

export default Team24_25;

const Card = ({ studImg, name, pos, email, linkedIn }) => {
    return (
        <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
                studImg={studImg}
                name={name}
                pos={pos}
                email={email}
                linkedIn={linkedIn}
            />
            <br />
        </div>
    );
};