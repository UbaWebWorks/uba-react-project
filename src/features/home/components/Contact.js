import React from "react";
import { BsFillHeartFill } from 'react-icons/bs';
import "./css/Contact.css";

export const Contact = () =>{
    return (
        <>
		<div className="Init_sub-banner" >
          <div className="Init_overlay">
          <div className="Init_container">
          <h2><span>Contact</span> Us</h2>
          <ol className="Init_breadcrumb">
          <li><a href="#"><h3>Home</h3></a></li>
          <li className="Init_active">Contact</li>
          </ol>
          </div>
          </div>
          </div>
          <br />
          <br />

<div className="container contact">
	<div className="row contact-full">
		<div className="col-md-3 contact-part">
			<div className="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We'd love to hear from you...</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-12 text-muted" for="fname">Address : Student Activity Center,Unnat Bharat Abhiyan, IIT Roorkee, Uttarakhand</label>
				</div>
				<br />
				<br />
				<div className="form-group">
				  <label className="control-label col-sm-12 text-muted" for="email">PHONE :
(+91) 7452971049</label>
                <br />
				<br />
				<br />
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-12 text-muted" for="comment">EMAIL :
uba@iitr.ac.in</label>
				</div>
				<br />
			</div>
		</div>
	</div>
	<br />
<br />
<br />
</div>
    </>
    )
}