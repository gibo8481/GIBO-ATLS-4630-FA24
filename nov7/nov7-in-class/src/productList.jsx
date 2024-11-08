import productListitem from './productListitem'

export default function productList({title, products}){
    return(
        <div className='product-list'>
            <h2>{title}</h2>
            {
                products.map(product => 
                < productListItem key= {product.name} product ={product}/>)
            }
        </div>
    )
}
// map each data item in the list to become a markup item, render it into a page
// mapping list from data to markup, have a key, product key for each item