import React, { useState } from 'react';
import CardList from './CardList';
const BakeryItem = ({ products, selectFilterType, sortProducts, addToFavor }) => {
    const [sort, setSort] = useState('Select');
    const startSort = (e) => {
        setSort(e.target.value);
        sortProducts(e.target.value);
    }
    const types = ['All', 'Pastry', 'Bread', 'Cake'];
    return (
        <div className='row'>
            <div className="Types">
                <h3>Types</h3>
                {
                    types.map((type) => {
                        return (
                            <button className={"type"} value="reset" onClick={() => { setSort('reset'); sortProducts('reset'); selectFilterType(type); }}>{type}</button>
                        )
                    })
                }
                <h3>Sort</h3>
                <div>
                    <button className={"type"} value="reset" onClick={startSort}>Reset Sorting</button>
                    <h3>By Prices</h3>
                    <button className={"type"} value="Highest Prices" onClick={startSort}>Highest Prices</button>
                    <button className={"type"} value="Lowest Prices" onClick={startSort}>Lowest Prices</button>
                </div>

                <h3>By Calories</h3>
                <div>
                    <button className={"type"} value="Highest Calories" onClick={startSort}>Highest Calories</button>
                    <button className={"type"} value="Lowest Calories" onClick={startSort}>Lowest Calories</button>
                </div>

            </div>
            <div className="products">
                <div><h3>My Bakery Shop</h3></div>
                <CardList products={products} addToFavor={addToFavor} />
            </div>
        </div>
    )
}

export default BakeryItem;
