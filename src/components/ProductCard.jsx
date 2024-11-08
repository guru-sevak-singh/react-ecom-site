import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ productDetail }) {
    const dataToSend = { name: 'John Doe', age: 30 };
    console.log(dataToSend);
    
    return (
        <div className="col-md-3 col-sm-6">

            <div className='card mb-2 mt-2'>
                <img src={productDetail.thumbnail} alt="" className='card-img-top' />
                <div className="card-body text-center">
                    <div className="card-title">
                        {productDetail.title}
                    </div>
                    <div className="card-text text-success text-bold">
                        {productDetail.price}
                    </div>
                    <Link to={{ pathname: `/product/${productDetail.id}`, state: dataToSend}} className='btn btn-sm btn-primary'>
                        View
                    </Link>

                </div>
            </div>
        </div>
    )
}
