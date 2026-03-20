import IdentityCard from 'features/home/js/IdentityCard';
import director from 'assets/images/patron/director.JPG';
import mparida from 'assets/images/patron/mprdaf.jpg';
import ap from 'assets/images/patron/Ap.jpeg';
import bhanu from 'assets/images/patron/bhanu.jpg';
import up from "assets/images/patron/up.jpeg"
import { BsFillHeartFill } from 'react-icons/bs';
import "./css/App.css";
import './css/Carousel.css';

export const Faculty = () => {
    return (
        <>
        <br />
        <br />
        <h2 className='text-warning'><center>Our <b>Patrons</b></center></h2>
      <div className="container">
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. Kamal Kishore Pant"
              designation="Director, IIT Roorkee"
              image={director}
              link="https://iitr.ac.in/Institute/Director%20IIT%20Roorkee.html#:~:text=Director%20IIT%20Roorkee&text=Director%2C%20IIT%20Roorkee-,Prof.,of%20Technology%20Kanpur%20in%201997." />
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. U.P. Singh"
              designation="Dy Director, IIT Roorkee"
              image={up}
              link="https://www.iitr.ac.in/departments/CE/pages/People+Faculty+Parida_M_.html" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <IdentityCard name="Dr.Bhanu Prakash Vellanki"
              designation="Co-ordinator, UBA IIT Roorkee"
              image={bhanu}
              link="https://civil.iitr.ac.in/CE?Uid=bhanufce" />
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. Ashish Pandey"
              designation="Regional Cordinator, UBA"
              image={ap}
              link="https://www.iitr.ac.in/departments/WRT/pages/People+Faculty+ashisfwt.html" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <br />
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
        <br />
        <br />
      </div>
        </>
    )
}
