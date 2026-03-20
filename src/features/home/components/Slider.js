import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sun from "assets/images/Blog/1_tvIMY9KFY3YRVMLaexcIxw.webp";
import archi from "assets/images/Blog/archi_agr.jpg";
import {FaMedium} from "react-icons/fa";


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesPerView:3,
        slidesToScroll: 1,
        cssEase: "linear",
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            520: {
                slidesPerView:2,
            },
            950:{
                slidesPerView:3,
            }
        }
    }
    return (
        <Slider className=" blog-card mt-2"{...settings}>
            <div className="card-wrapper blog-card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={Sun} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://medium.com/@uba.iitr/%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-35cc9b38b335">< FaMedium className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Sunidhi Jindal<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper blog-card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*WczUk_unf1UTTpA-aRccXQ.jpeg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://medium.com/@uba.iitr/%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-2eb33544a9b6">< FaMedium className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Pratyay Urade<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper blog-card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*fKpF6btHzyDtX0zON9D-wQ.png" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://medium.com/@uba.iitr/%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-12ed432add04">< FaMedium className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Harsh Kumar<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper blog-card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*iCBtqBkI27f7C2_oP7UOXw.jpeg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://medium.com/@uba.iitr/%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-2907a25f22d2">< FaMedium className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Harsh Tanwar<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper blog-card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*0Qc838V11kbV9MYpke9TJQ.jpeg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://medium.com/@uba.iitr/%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-f2e3c7e713a8">< FaMedium className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Adarsh Kumar Singh<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper blog-card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={archi} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://medium.com/@uba.iitr/%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-ce4661ba6faf">< FaMedium className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Archi Agrawal<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper blog-card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*H_Jw9CGBiiZR0-od42_DXw.jpeg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://medium.com/@uba.iitr/%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-acabca478951">< FaMedium className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Piyush Yadav<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper blog-card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*IdjZegWZiNtKTvJiOAORBw.png" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://medium.com/@uba.iitr/%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%87-4b42985c9342">< FaMedium className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Shubham Sidhartha<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider

//... is called spread operator

//thanks for watching
//pleae subscribe my channel