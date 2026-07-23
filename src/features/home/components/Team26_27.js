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


const members = [
    {
        name: "Tapas Gupta",
        team: "Central Team",
        pos: "Overall Finance Coordinator",
        email: "tapas_g1@ce.iitr.ac.in",
        linkedIn: "https://linkedin.com/in/tapas-gupta-500871312",
        studImg: tapas
    },
    {
        name: "Chintu",
        team: "Rithaura Grunt",
        pos: "Village Coordinator",
        email: "chintu1@ch.iitr.ac.in",
        linkedIn: "",
        studImg: chintu
    },
    {
        name: "Mahak",
        team: "Meerpur",
        pos: "Village Coordinator",
        email: "mahak1@ee.iitr.ac.in",
        linkedIn: "",
        studImg: mahak
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
        name: "Piyush Meena",
        team: "Puranpur",
        pos: "Village Coordinator",
        email: "Piyush_m1@mt.iitr.ac.in",
        linkedIn: "",
        studImg: piyush
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
        name: "Jaswant Kumar Meena",
        team: "Central Team",
        pos: "Initiative Head - Agriculture and Sanitation",
        email: "jaswant_km@me.iitr.ac.in",
        linkedIn: "https://www.linkedin.com/in/jaswant-kumar-762690349?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        studImg: jaswant
    },
    {
        name: "Pranjal Gupta",
        team: "Gopalpur",
        pos: "Village Coordinator",
        email: "pranjal_g@ce.iitr.ac.in",
        linkedIn: "https://www.linkedin.com/in/pranjal-gupta-8125a4385?utm_source=share_via&utm_content=profile&utm_medium=member_android							",
        studImg: pranjal
    }
];


const Team25_26 = () => {
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


export default Team25_26



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