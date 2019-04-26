import React from 'react';
import CardGenerator from './CardGenerator';

const CardsList = (props) => {
    return(
        <div className='cardList'>
            {props.starwarsCharsBanana.map( info => {
                return(
                    <CardGenerator key={info.created} infobanana={info} />
					// each child should have a unique key prop for some reason
                );
            })};
        </div>
    );
};

export default CardsList;
