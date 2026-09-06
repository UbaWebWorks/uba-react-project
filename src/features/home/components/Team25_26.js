import React from "react";
import "./css/StudentTeam.css";
import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard } from 'features/home/js/StudentIdentityCard';
import { BsFillHeartFill } from 'react-icons/bs';
import priyanshuchauhan from "assets/images/StudentTeam/25-26/priyanshuchauhan.jpg";
import muskanmimrot from "assets/images/StudentTeam/25-26/muskanmimrot.jpg";
import vidhijain from "assets/images/StudentTeam/25-26/vidhijain.jpg";
import adarshkumar from "assets/images/StudentTeam/25-26/adarshkumar.jpg";
import anamikapatel from "assets/images/StudentTeam/25-26/anamikapatel.jpg";
import srujan from "assets/images/StudentTeam/25-26/srujan.jpg";
import shrawani from "assets/images/StudentTeam/25-26/shrawani.jpg";
import kumkum from "assets/images/StudentTeam/25-26/kumkum.jpg";
import sarthakkesari from "assets/images/StudentTeam/25-26/sarthakkesari.jpg";
import vibha from "assets/images/StudentTeam/25-26/vibha.jpg";
import nimesh from "assets/images/StudentTeam/25-26/nimesh.jpg";
import chestatiwari from "assets/images/StudentTeam/25-26/chestatiwari.jpg";
import snehakumari from "assets/images/StudentTeam/25-26/snehakumari.jpg";
import garvagarwal from "assets/images/StudentTeam/25-26/garvagarwal.jpeg";
import romankumar from "assets/images/StudentTeam/25-26/romankumar.jpg";
import anantshukla from "assets/images/StudentTeam/25-26/anantshukla.jpg";
import shiv from "assets/images/StudentTeam/25-26/shiv.jpg";
import payal from "assets/images/StudentTeam/25-26/payal.jpg";
import manisha from "assets/images/StudentTeam/25-26/manisha.jpg";
import akshatsingh from "assets/images/StudentTeam/25-26/akshatsingh.jpeg";

const members = [
    { name: "Shiv Prakash Vishwari", email: "shiv_pv@ch.iitr.ac.in", pos: "Overall Team Coordinator", linkedIn: "https://www.linkedin.com/in/shiv-prakash-vishwari-b83747282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", studImg: shiv },
    { name: "Akshat Singh", email: "akshat_s@ce.iitr.ac.in", pos: "Overall Student Coordinator", linkedIn: "https://www.linkedin.com/in/akshat-singh-763448284/", studImg: akshatsingh },
    { name: "Manisha", email: "manisha@ph.iit.ac.in", pos: "Overall Coordinator for Media and Public Relations", linkedIn: "https://www.linkedin.com/in/manisha-kumari-378279280", studImg: manisha },
    { name: "Payal", email: "payal@ce.iitr.ac.in", pos: "Overall Documentation Coordinator", linkedIn: "https://www.linkedin.com/in/payal2411?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", studImg: payal },
    { name: "Anant Shukla", email: "anant_s@ce.iitr.ac.in", pos: "Overall Finance Coordinator", linkedIn: "https://www.linkedin.com/in/anantastic", studImg: anantshukla },
    { name: "Roman Kumar", email: "roman_k@me.iitr.ac.in", pos: "Initiative Head (Agriculture & Sanitation)", linkedIn: "https://www.linkedin.com/in/roman-kumar-170228289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", studImg: romankumar },
    { name: "Garv Agarwal", email: "garv_a@ch.iitr.ac.in", pos: "Initiative Head (Education)", linkedIn: "https://www.linkedin.com/in/garv-agarwal-782122291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", studImg: garvagarwal },
    { name: "Sneha Kumari", email: "sneha_k@ch.iitr.ac.in", pos: "Initiative Head (SHGs)", linkedIn: "https://www.linkedin.com/in/sneha-kumari-a143872a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", studImg: snehakumari },
    { name: "Chesta Tiwari", email: "chesta_t@es.iitr.ac.in", pos: "Initiative Head (SHGs)", linkedIn: "https://www.linkedin.com/in/chesta-tiwari-b85051283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", studImg: chestatiwari },
    { name: "Nimesh", email: "nimesh@ee.iitr.ac.in", pos: "Village Coordinator Beladi", linkedIn: "", studImg: nimesh },
    { name: "Vibha", email: "vibha@ch.iitr.ac.in", pos: "Village Coordinator Beladi", linkedIn: "https://www.linkedin.com/in/vibha-duberwal-3bb6262b7/", studImg: vibha },
    { name: "Sarthak Keshari", email: "sarthak_k@ce.iitr.ac.in", pos: "Village Coordinator Gopalpur", linkedIn: "https://www.linkedin.com/in/sarthak-keshari-815550287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", studImg: sarthakkesari },
    { name: "Kumkum", email: "kumkum@ce.iitr.ac.in", pos: "Village Coordinator Gopalpur", linkedIn: "https://www.linkedin.com/in/shrawani-raut-9646042b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", studImg: kumkum },
    { name: "Shrawani Raut", email: "shrawani_mr@ch.iitr.ac.in", pos: "Village Coordinator Meerpur", linkedIn: "https://www.linkedin.com/in/shrawani-raut-9646042b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", studImg: shrawani },
    { name: "Srujan Pasare", email: "srujan_sp@hs.iitr.ac.in", pos: "Village Coordinator Meerpur", linkedIn: "https://www.linkedin.com/in/srujan-pasare-ab63502b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", studImg: srujan },
    { name: "Anamika Patel", email: "anamika_p@ph.iitr.ac.in", pos: "Village Coordinator Meerpur", linkedIn: "http://linkedin.com/in/anamika-patel-aa7030295", studImg: anamikapatel },
    { name: "Adarsh Kumar", email: "adarsh_k@me.iitr.ac.in", pos: "Village Coordinator Rithaura-Grunt", linkedIn: "", studImg: adarshkumar },
    { name: "Vidhi Jain", email: "vidhi_j@me.iitr.ac.in", pos: "Village Coordinator Rithaura-Grunt", linkedIn: "https://uba.iitr.ac.in/www.linkedin.com/in/vidhi-jain-9282802a7", studImg: vidhijain },
    { name: "Muskan Mimrot", email: "muskan_m@ce.iitr.ac.in", pos: "Village Coordinator Puranpur", linkedIn: "https://in.linkedin.com/in/muskan-mimrot-874181348", studImg: muskanmimrot },
    { name: "Priyanshu Chauhan", email: "priyanshu_c@ma.iitr.ac.in", pos: "Village Coordinator Puranpur", linkedIn: "https://www.linkedin.com/in/priyanshu-chauhan-7bb68b1b0/?originalSubdomain=in", studImg: priyanshuchauhan }
]
const Team25_26 = () => {
    return (
        <>
            <Container style={{ background: "#f7f8f9" }}>
                <h1 className="text-center headingStudent1 my-5">Central Team 2025-26</h1>
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