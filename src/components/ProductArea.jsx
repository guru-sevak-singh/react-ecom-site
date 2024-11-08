import ProductCard from './ProductCard'


export default function ProductArea({ products }) {

    let produclItems = products.map((product, index) => {
        return (
            <ProductCard key={index} productDetail={product}  />
        )
    })

    return (
        <div className='container'>

            <div className="row myDiv">
                {
                    produclItems
                }
            </div>
        </div>
    )
}
