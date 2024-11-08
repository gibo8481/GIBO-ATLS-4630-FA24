import searchArea from './searchArea'
import productList from './productList'

export default function FilterableProductList(){

  const fruits = products.filter(product => product.category === 'Fruits') // filtering out list of products with category fruits
  const veggies = products.filter(product => product.category === 'Vegetables')
  return(
    <>
    <searchArea />
    <div className = 'lists-container'></div>
    <productList title="Fruits" products = {fruits}/>
    <productList title="Vegetables" products = {veggies}/>
    </>
  )
}