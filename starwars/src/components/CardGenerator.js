import React from 'react';

const CardGenerator = (props) => {
	let theName = props.infobanana.name;
	return(
		<div className='info-card'>
			<h3> {theName} </h3>
			<div className='unordered-list'>
				<ul>
					<li>It appears that {theName} gender is {props.infobanana.gender}</li>
					<li></li>
					<li><a href="{props.infobanana.homeworld}">Lets go on a trip to {props.infobanana.name}'s homeworld</a></li>
				</ul>
			</div>
		</div>
	)
}

export default CardGenerator;
