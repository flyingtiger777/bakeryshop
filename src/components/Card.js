import React from 'react'

const Card = ({ bakeryData, addToFavor }) => {
    return (
        <div className="card">
            <img className="image" src={bakeryData.image} />
            <h3 className="name">{bakeryData.name}</h3>
            <p className="description"><span>{bakeryData.description}</span></p>
            <p className="price"><span>$ {bakeryData.price}</span></p>
            <p className="price"><span>Calories: {bakeryData.calories}</span></p>
            <button className="add" onClick={() => addToFavor(bakeryData)}>Add to Favorites</button>
        </div>
    )
}

export default Card;
