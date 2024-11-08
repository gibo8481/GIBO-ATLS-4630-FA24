/** */
import FilterableProductList from "./FilterableProductList"
import searchArea from "./searchArea"

const data = [
  {
    category: 'Fruits',
    price: 1,
    stocked: true,
    name: 'Apple',
  },
  {
    category: 'Fruits',
    price: 1,
    stocked: true,
    name: 'Banana',
  },
  {
    category: 'Fruits',
    price: 2,
    stocked: false,
    name: 'Peach',
  },
  {
    category: 'Fruits',
    price: 1,
    stocked: true,
    name: 'Apple',
  },
  {
    category: 'Vegetables',
    price: 4,
    stocked: true,
    name: 'Spinach',
  },
  {
    category: 'Vegetables',
    price: 1,
    stocked: true,
    name: 'Peas',
  },

]

export default function App(){

  return(
    <>
      <FilterableProductList/>
    </>
  )
}