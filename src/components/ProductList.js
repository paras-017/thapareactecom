import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'

const ProductList = () => {
const {filter_products, setGridView, grid_view}=useFilterContext()

if(grid_view === true){
  return <GridView products = {filter_products}/>
}
// if(grid_view === false){
//   return <ListView products = {filter_products}/>
// }

}

export default ProductList