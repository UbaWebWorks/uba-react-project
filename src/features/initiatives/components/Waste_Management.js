import React from 'react';
import 'features/events/css/Events_InitCard.css';
import { Events_InitCard1 } from 'features/events/components/Events_InitCard1'
import bric from 'assets/images/Initiatives/Waste_Management/Ecobricks.jpg';



export const Waste_Management = () => {
  return <div>
          <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Initiatives</h2>
          <ol className="Init_breadcrumb">
          <li><a href="/"><h3>Home</h3></a></li>
          <li className="Init_active">Waste_Management</li>
          </ol>
          </div>
          </div>
          </div>
      <div className='cards'>
        <Events_InitCard1
          image={bric}
          date='June 5 , 2023'
          village ="Puranpur |"
          event='Ecobricks for sustainability'
          desc='To highlight the importance and usage of ecobricks, the team organized an interactive session for the students of Puranpur. The session aimed to educate the students about the ecological benefits of ecobricks and their potential applications'/>
      </div>
  </div>;
};