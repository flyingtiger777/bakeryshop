import React from 'react';
import Card from './Card';

const CardList = ({ products, addToFavor }) => {
    return (
        <div className='cardList'>
                {

                    products.map(item => {
                        return (
                            <Card bakeryData={item} addToFavor={addToFavor} />
                        )
                    })
                }
        </div>
    )
}

export default CardList
