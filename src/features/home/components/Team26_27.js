import React from "react";
import "./css/StudentTeam.css";
import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { BsFillHeartFill } from 'react-icons/bs';
import pranjal from "assets/images/StudentTeam/26-27/pranjal.jpg";
import jaswant from "assets/images/StudentTeam/26-27/Jaswant_Kumar_Meena_.jpg";
import mahak from "assets/images/StudentTeam/26-27/Mahak.jpg";
import chintu from "assets/images/StudentTeam/26-27/Chintu.jpg";
import piyush from "assets/images/StudentTeam/26-27/Piyush meena.jpg";
import devansh from "assets/images/StudentTeam/26-27/Devansh.jpg";
import shreyansh from "assets/images/StudentTeam/26-27/Shreyansh-24113120.jpg";
import tapas from "assets/images/StudentTeam/26-27/tapas_gupta.jpg";
import chandan from "assets/images/StudentTeam/26-27/chandan.PNG";
import arpit from "assets/images/StudentTeam/26-27/arpit.jpg";
import soniya from "assets/images/StudentTeam/26-27/soniya.webp";
import utkarsh from "assets/images/StudentTeam/26-27/utkarsh.jpg";
import vasundhara from "assets/images/StudentTeam/26-27/vasundhara.png";
import lalit from "assets/images/StudentTeam/26-27/lalit.jpg";
import ganesh from "assets/images/StudentTeam/26-27/ganesh.jpg";
import divya from "assets/images/StudentTeam/26-27/divya.jpg";
import sneha from "assets/images/StudentTeam/26-27/sneha.jpg";


const members = [
    {
        name: "Lalit Yadav",
        team: "Central team",
        pos: "Overall Team Co-ordinator",
        email: "lalit_y@ch.iitr.ac.in",
        linkedIn: "https://www.linkedin.com/in/lalit-yadav-5254b6375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        studImg: lalit
    },
    {
        name: "Vasundhara Agrawal",
        team: "Central team",
        pos: "Overall Student Coordinator",
        email: "vasundhara_a@es.iitr.ac.in",
        linkedIn: "",
        studImg: vasundhara
    },
    {
        name: "Shreyansh",
        team: "Media Team",
        pos: "Overall Co-ordinator for Media and Public Relations",
        email: "shreyansh_m@ce.iitr.ac.in",
        linkedIn: "",
        studImg: shreyansh
    },
    {
        name: "Tanmay Jain",
        team: "Central Team",
        pos: "Overall Documentation Co-ordinator",
        email: "Tanmay_j@ch.iitr.ac.in",
        linkedIn: "",
        studImg: " "
    },
    {
        name: "Tapas Gupta",
        team: "Central Team",
        pos: "Overall Finance Coordinator",
        email: "tapas_g1@ce.iitr.ac.in",
        linkedIn: "https://www.linkedin.com/in/tapas-gupta-500871312/",
        studImg: tapas
    },
    {
        name: "Jaswant Kumar Meena",
        team: "Central Team",
        pos: "Initiative Head - Agriculture and Sanitation",
        email: "jaswant_km@me.iitr",
        linkedIn: "https://www.linkedin.com/in/jaswant-kumar-762690349?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        studImg: jaswant
    },
    {
        name: "Devansh Chouksey",
        team: "Central Team",
        pos: "Initiative Head - Education",
        email: "devansh_c@me.iitr.ac.in",
        linkedIn: "https://linkedin.com/in/devansh-chouksey",
        studImg: devansh
    },
    {
        name: "Chandan Jyoti Mohon",
        team: "Central Team",
        pos: "Initiative Head - SHGs",
        email: "chandan_jm@es.iitr.ac.in",
        linkedIn: "",
        studImg: chandan
    },
    {
        name: "Arpit Yadav",
        team: "Beladi",
        pos: "Village Coordinator Beladi",
        email: "arpit_y@mt.iitr.ac.in",
        linkedIn: "https://www.linkedin.com/in/arpit-yadav-4720b2318/",
        studImg: arpit
    },
    {
        name: "Sneha Shukla",
        team: "Beladi",
        pos: "Village Coordinator Beladi",
        email: "sneha_s@ce.iitr.ac.in",
        linkedIn: "",
        studImg: sneha
    },
    {
        name: "Soniya banwasi",
        team: "Gopalpur",
        pos: "Village Coordinator Gopalpur",
        email: "soniya_b@ma.iitr.ac.in",
        linkedIn: "",
        studImg: soniya
    },
    {
        name: "Pranjal Gupta",
        team: "Gopalpur",
        pos: "Village Coordinator Gopalpur",
        email: "pranjal_g@ce.iitr.ac.in",
        linkedIn: "https://www.linkedin.com/in/pranjal-gupta-8125a4385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        studImg: pranjal
    },
    {
        name: "Utkarsh Bhardwaj",
        team: "Meerpur",
        pos: "Village Coordinator Meerpur",
        email: "utkarsh_b@ch.iitr.ac.in",
        linkedIn: "",
        studImg: utkarsh
    },
    {
        name: "Mahak",
        team: "Meerpur",
        pos: "Village Coordinator Meerpur",
        email: "mahak1@ee.iitr.ac.in",
        linkedIn: "",
        studImg: mahak
    },
    {
        name: "Jakkala Ganesh",
        team: "Rithaura Grunt",
        pos: "Village Coordinator Rithaura-Grunt",
        email: "ganesh_j@ce.iitr.ac.in",
        linkedIn: "",
        studImg: ganesh
    },
    {
        name: "Chintu",
        team: "Rithaura Grunt",
        pos: "Village Coordinator Rithaura-Grunt",
        email: "chintu1@ch.iitr.ac.in",
        linkedIn: "",
        studImg: chintu
    },
    {
        name: "Piyush Meena",
        team: "Puranpur",
        pos: "Village Coordinator Puranpur",
        email: "Piyush_m1@mt.iitr.ac.in",
        linkedIn: "",
        studImg: piyush
    },
    {
        name: "Divya Agrawal",
        team: "Puranpur",
        pos: "Village Coordinator Puranpur",
        email: "divya_a@ch.iitr.ac.in",
        linkedIn: "",
        studImg: divya
    }
].sort((a, b) => a.name.localeCompare(b.name));


const Team26_27 = () => {
    return (
        <>
            <Container style={{ background: "#f7f8f9" }}>
                <h1 className="text-center headingStudent1 my-5">Central Team 2026-27</h1>
                <Row>
                    {
                        members.map((member, i) => <Card name={member.name} email={member.email} linkedIn={member.linkedIn} pos={member.pos} key={i} studImg={member.studImg} />
                        )}
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


export default Team26_27



const Card = ({ studImg, name, pos, email, linkedIn }) => {
    return (<div className="col-lg-5" style={{ marginLeft: "auto" }}>
        <StudentIdentityCard
            studImg={studImg}
            name={name}
            pos={pos}
            email={email}
            linkedIn={linkedIn}
        />
        <br />
    </div>
    )
}