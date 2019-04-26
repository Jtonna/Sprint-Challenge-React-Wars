import React from 'react';

const CardGenerator = (props) => {
	return(
		<div className='info-card'>
			<h3> {props.info.name} </h3>
			<div className='unordered-list'>
				<ul>
					<li>Gender: {props.info.gender}</li>
				</ul>
			</div>
		</div>
	)
}

export default CardGenerator;
