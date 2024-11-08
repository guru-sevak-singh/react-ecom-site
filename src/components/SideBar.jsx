import React, { act } from 'react';


export default function SideBar({ catogary, activeLi, setActiveLi, changeProducts }) {

    return (
        <div >
            <h3 className='text-center'>Products</h3>
            <div className="myDiv">

                <ul className='list-group'>
                    <li key={0} className={`list-group-item ${(activeLi == '0') ? "active" : ""}`} onClick={() => { setActiveLi(0); changeProducts('https://dummyjson.com/products') }} >All</li>
                    {
                        catogary.map((productName, index) => {
                            return (
                                <li key={index + 1} onClick={() => { setActiveLi(index + 1); changeProducts(productName.url) }} className={`list-group-item ${(activeLi === index + 1) ? "active" : ""}`}>{productName.name}</li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}
