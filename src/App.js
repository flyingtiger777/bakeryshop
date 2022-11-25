import './App.css';
import BakeryItem from './components/BakeryItem';
import filterList from './components/filterList';
import Favorites from './components/Favorites';
import React, { useState, useEffect } from 'react';
import Favorites from './components/Favorites';

function App() {
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [total, setTotal] = useState(0);
  const [favor, setFavor] = useState([]);

  useEffect(() => {
    setProducts(filterList([], null));
    calculateTotal();
  }, [favor])


  /* function to add a item to the favorites */
  const addToFavor = (item) => {
    if (!favor.includes(item)) {
      setFavor([...favor, item]);
    }
  }

  const removeItem = (value) => {
    if (value === 'all') {
      setFavor((current) =>
        current.filter((item) => item.name === value));
    } else {
      setFavor((current) =>
        current.filter((item) => item.name !== value)
      );
    }

  };


  /* calculate the total prices after adding the items */
  const calculateTotal = () => {
    let price = 0;
    let i = 0
    while (i < favor.length) {
      price += favor[i].price
      i++
    }
    setTotal(price.toFixed(2));
  };

  const selectFilterType = (type) => {
    const types = [...type];
    types.push(type);
    setTypes(types);
    setProducts(filterList(types, 'type'));
  }

  const sortProducts = (method) => {
    const array = products;
    if (method === "Lowest Prices") {
      array.sort(function (a, b) {
        console.log('sort low price')
        return a.price - b.price
      })
    }
    else if (method === "Highest Prices") {
      array.sort(function (a, b) {
        console.log('sort high price')
        return b.price - a.price
      })
    }
    else if (method === "Lowest Calories") {
      array.sort(function (a, b) {
        console.log('sort low calories')
        return a.calories - b.calories
      })
    }
    else if (method === "Highest Calories") {
      array.sort(function (a, b) {
        console.log('sort high calories')
        return b.calories - a.calories
      })
    }
    else if (method === "reset") {
      array.sort(function (a, b) {
        console.log('reset')
        return a.id - b.id
      })
    }
    setProducts(array);
    // console.log('sort')
  }

  return (
    <div className="App">
      <BakeryItem products={products} types={types} addToFavor={addToFavor} selectFilterType={selectFilterType} sortProducts={sortProducts} />
      <Favorites favor={favor} total={total} removeItem={removeItem}></Favorites>
    </div>
  );
}

export default App;
