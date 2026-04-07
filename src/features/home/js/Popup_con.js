import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../css/InitCard.css';
export default function Popup_con(props) {
	return (
		<div>
			<Popup trigger=
				{<button id="know-more">Know more</button>}
				position="right center">
				<div style={{height:'40vh', width:'80vw'}}>your content</div>
			</Popup>
		</div>
	)
};
