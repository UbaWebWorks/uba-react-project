import React from 'react';
import 'features/events/css/Events_InitCard.css';
import { Events_InitCard1 } from 'features/events/components/Events_InitCard1'
import eye from 'assets/images/Initiatives/Health/eye.jpeg'



export const Health = () => {
  return <div>
         <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Initiatives</h2>
          <ol className="Init_breadcrumb">
          <li><a href="/"><h3>Home</h3></a></li>
          <li className="Init_active">Health</li>
          </ol>
          </div>
          </div>
          </div>
      <div className='cards'>
      <Events_InitCard1 
          image={eye}
          village = "Gopalpur |"
          date='October 28,2023'
          event='Eye Health Camp'
          desc='Team UBA IIT Roorkee organized a vital Eye Health Camp in Gopalpur, addressing the lack of healthcare facilities within the Gopalpur village in collaboration with "The Hans Foundation"'/>
      </div>
  </div>;
};