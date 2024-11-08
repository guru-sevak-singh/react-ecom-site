import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ProductArea from './components/ProductArea';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Loader from './components/Loader';


function App() {

  let [catogary, setCatogary] = useState([])

  let [products, setProducts] = useState([])

  let [activeLi, setActiveLi] = useState('0')

  let changeProducts = (url) => {
    setProducts([])
    axios.get(url)
      .then((res) => res.data)
      .then((finalResponse) =>
        setProducts(finalResponse.products)
      )
  }

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalResponse) =>
        setProducts(finalResponse.products)
      )
  }

  let getCatogary = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalResponse) => {

        setCatogary(finalResponse);
      })
  }

  useEffect(() => {
    getCatogary();
    getProducts();
  }, [])




  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h1 className='text-center'>Our Products</h1>
          </div>

        </div>
      </div>
      <div className="row">

        <div className="col-md-3">
          <SideBar catogary={catogary} activeLi={activeLi} setActiveLi={setActiveLi} changeProducts={changeProducts} />
        </div>
        <div className="col-md-9">
          {
            (products.length === 0) ?
              <Loader />
              :

              <ProductArea products={products} />
          }
        </div>
      </div>

    </div>
  );
}

export default App;
