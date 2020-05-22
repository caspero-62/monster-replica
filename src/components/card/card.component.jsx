import React from 'react';

import './card.style.css';

export const Card = (props) => {
    return (
        <div className = 'card-container'>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}.png`} />
            <h2> {props.monster.name} </h2>
            <p> {props.monster.email} </p>
        </div>
    )
}