import React from 'react';
import CardGenerator from './CardGenerator';

const CardsList = (props) => {
    return(
        <div className='cardList'>
            {props.starwarsCharsBanana.map( info => {
				// loops over the array for each item and passes it to the card generator
                return(
                    <CardGenerator key={info.created} infobanana={info} />
					// each child should have a unique key prop for some reason
					// card generator does data magic and makes a new 'div infocard' for each array | this happens in card generator
                );
            })};
        </div>
    );
};

export default CardsList;
