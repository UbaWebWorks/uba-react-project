import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "features/home/components/HomeScreen";
import { Header } from "features/home/components/Header.js";
import { StudentTeam } from "features/home/components/StudentTeam";
import { Beladi } from "features/home/components/Villages/Beladi";
import { Gopalpur } from "features/home/components/Villages/Gopalpur.js";
import { Rithaura } from "features/home/components/Villages/Rithaura.js";
import { Meerpur } from "features/home/components/Villages/Meerpur.js";
import { Puranpur } from "features/home/components/Villages/Puranpur.js";
import { InitCard_Events } from "features/events/components/InitCard_Events";
import { Work } from "features/home/components/Work";
import About from "features/home/components/About";
import { Faculty } from "features/home/components/Faculty";
import { Contact } from "features/home/components/Contact";
import { Team22_23 } from "features/home/components/Team22_23.js";
import { Team2021 } from "features/home/components/Team2021.js";
import Footer1 from 'features/home/components/Footer1';
import { Team21_22 } from "features/home/components/Team21_22.js";
import { Waste_Management } from "features/initiatives/components/Waste_Management.js";
import { Agriculture } from "features/initiatives/components/Agriculture.js";
import { Health } from "features/initiatives/components/Health.js";
import { Education } from "features/initiatives/components/Education.js";
import { SHGs } from "features/initiatives/components/SHGs.js";
import Team25_26 from "features/home/components/Team25_26";
import Team24_25 from "features/home/components/Team24_25";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<HomeScreen />}></Route>
        <Route path='/beladi' exact element={<Beladi />}></Route>
        <Route path='/gopalpur' exact element={<Gopalpur />}></Route>
        <Route path='/rithaura' exact element={<Rithaura />}></Route>
        <Route path='/meerpur' exact element={<Meerpur />}></Route>
        <Route path='/puranpur' exact element={<Puranpur />}></Route>
        <Route path='/about' exact element={<About />}></Route>
        <Route path='/Studentteam' exact element={<StudentTeam />}></Route>
        <Route path='/Studentteam22_23' exact element={<Team22_23 />}></Route>
        <Route path='/Studentteam21_22' exact element={<Team21_22 />}></Route>
        <Route path='/Studentteam25_26' exact element={<Team25_26 />}></Route>
        <Route path='/Studentteam20_21' exact element={<Team2021 />}></Route>
        <Route path='/Studentteam24_25' exact element={<Team24_25 />}></Route>
        <Route path='/waste_management' exact element={<Waste_Management />}></Route>
        <Route path='/education' exact element={<Education />}></Route>
        <Route path='/agriculture' exact element={<Agriculture />}></Route>
        <Route path='/health' exact element={<Health />}></Route>
        <Route path='/shgs' exact element={<SHGs />}></Route>
        <Route path='/work' exact element={<Work />}></Route>
        <Route path='/events' exact element={<InitCard_Events />}></Route>
        <Route path='/faculty' exact element={<Faculty />}></Route>
        <Route path='/contact' exact element={<Contact />}></Route>
      </Routes>
      <Footer1 />
    </BrowserRouter>
  )
}


export default Router;