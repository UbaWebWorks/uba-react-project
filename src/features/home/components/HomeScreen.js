import React from 'react'
import FrontPageCarousel from './FrontPageCarousel'
import About from './About'
import { Work } from './Work'
import IdentityCard from 'features/home/js/IdentityCard'
import ImageSlider from './Slider'
import Inspiration from './Inspiration'
import { Events_InitCard1 } from 'features/events/components/Events_InitCard1'
import jiv from 'assets/images/Initiatives/Technology/jeev.jpeg'
import candle from 'assets/images/Initiatives/SHGs/candle.jpeg'
import az from 'assets/images/Initiatives/Technology/azolla.jpg'
import director from 'assets/images/patron/director.JPG'
import up from 'assets/images/patron/up.jpeg'
import bhanu from 'assets/images/patron/bhanu.jpg'
import ap from 'assets/images/patron/Ap.jpeg'
import { BsFillHeartFill } from 'react-icons/bs'

export const HomeScreen = () => {


  return (
    <>
      <div style={{width:'full'}}>
      <FrontPageCarousel/>
      <About />
      <div className="container">
        <section >
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            <h2>Our Recent <span>Initiatives </span></h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <center>
              <Events_InitCard1
          image={jiv}
          village="All villages |"
          date="Dec 3,2023"
          event="Jivamrit Initiative"
          desc="Team UBA, IIT Roorkee took the Jeevamrit initiative,a biopesticide and organic manure prepared by fermenting a  mixture of cow dung, cow urine, jaggery etc"
        /><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
              <Events_InitCard1
          image={candle}
          date='Oct 23 , 2023'
          village ="All Villages |"
          event='Candle Making'
          desc='In lieu of the approaching festive season, UBA IIT Roorkee took up the initiative of candle-making to brighten the Diwali by giving the village women another skill towards self sufficiency.'/><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
              <Events_InitCard1
          image={az}
          village="All villages |"
          date="Sept 17, 2023"
          event="Azolla Cultivation"
          desc="Team UBA, IIT Roorkee identified that the cattle owned by farmers lack nutrients in their regular fodder which is further causing low yield of milk produced by them. "
        /><br/>
              </center>
            </div>
          </div>
        </section>
      </div>
      <Work /><br/><br/>
      <h2><center>Our <b>Patrons</b></center></h2>
      <div className="container mt-1">
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
        <div className="row mt-2">
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
      </div>
      <div className="container">
        {/* <!--======= TITTLE =========--> */}
        <div className="tittle">
          <h2 className='-mt-2'>Fresh From The <span>Blog</span></h2>
          <p className='mb-2'>Work.  Innovation.  Fun.</p>
        </div>
        <div className="row mt-5 carousel-blog carousel" style ={{justifyContent:'center',margin:'3rem auto'}}>

          <ImageSlider />
        </div>
      </div>
      <Inspiration />
      {/* <!--======= PROUD =========--> */}
      <section ><br/>
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
      <br />
      </section>
      </div>
      
    </>
  )
}

