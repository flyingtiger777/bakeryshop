import React, { useState } from 'react'

const Favorites = ({ favor, total, removeItem }) => {
    const [remove, setRemove] = useState('Select');
    const startRemove = (e) => {
        setRemove(e.target.value);
        removeItem(e.target.value);
    }
    return (
        <div className="favorites">
            <h2>Favorites</h2>
            <p>Click items to remove them</p>
            {favor.map((item, index) => (
                <div key={index}>
                    <button className='remove' value={item.name} onClick={startRemove}>{item.name}: ${item.price.toFixed(2)}</button>
                </div>
            ))}
            <button className='remove-all' value='all' onClick={startRemove}>Remove All</button>
            <b>Total: ${total}</b>
        </div>
    )
}

export default Favorites;
