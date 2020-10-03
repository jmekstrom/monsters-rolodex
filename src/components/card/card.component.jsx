import React from 'react';
import './card.styles.scss';


//functional component
export const Card = props => (

    <div className="card-container">
        <div className="card-inner">
            <div className="card-image-container">
                <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            </div>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    </div>
    
)