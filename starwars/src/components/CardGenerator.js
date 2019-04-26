import React from 'react';

const CardGenerator = (props) => {
	let name = props.infobanana.name;
	let height = props.infobanana.height;
	let dps = props.infobanana.height - props.infobanana.mass;

	return(
		<div className='custom-card'>
		  <div className='card-container'>
		    <div className='top'>
		      {name}
		      <div>
				<ul>
		        	<li>hair color: {props.infobanana.hair_color}</li>
		        	<li>eye color: {props.infobanana.eye_color}</li>
		        	<li>height: {props.infobanana.height}cm</li>
		      	</ul>
		      </div>
		    </div>
		    <div className='middle'>
				<h4>is from <a href={props.infobanana.homeworld}>this planet</a></h4>
		    </div>
		  </div>
		</div>
	)
}

export default CardGenerator;
