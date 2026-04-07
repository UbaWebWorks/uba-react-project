import React from 'react';
import 'features/events/css/Events_InitCard.css';
import { Events_InitCard1 } from 'features/events/components/Events_InitCard1'
import candle from "assets/images/Initiatives/SHGs/candle.jpeg";
import gobar from "assets/images/Initiatives/SHGs/gobar.jpg";

export const SHGs = () => {
  return <div>
          <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Initiatives</h2>
          <ol className="Init_breadcrumb">
          <li><a href="/"><h3>Home</h3></a></li>
          <li className="Init_active">SHGs</li>
          </ol>
          </div>
          </div>
          </div>
      <div className='cards'>
        <Events_InitCard1
          image={candle}
          date='Oct 23 , 2023'
          village ="All Villages |"
          event='Candle Making'
          desc='In lieu of the approaching festive season, UBA IIT Roorkee took up the initiative of candle-making to brighten the Diwali by giving the village women another skill towards self sufficiency.'/>
        <Events_InitCard1
          image={gobar}
          date='August 29 , 2023'
          village ="All Villages |"
          event='Gobar Diya Training'
          desc='Team UBA, IIT Roorkee conducted Gobar Diya Training at Rithaura-Grunt village for self-help group women. 
          In comparison to the currently available diyas, gobar diyas stand out as eco-friendly alternatives that cause no pollution and generate zero waste.'/>
      </div>
  </div>;
};