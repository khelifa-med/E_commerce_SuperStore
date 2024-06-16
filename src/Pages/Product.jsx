import React from 'react'
import { useParams } from 'react-router-dom'
import ProductId_Item from '../Components/ProductId_Item/ProductId_Item'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/description/Description'
import RelatedProducts from '../Components/related Products/RelatedProducts'
import { useSelector } from 'react-redux';
export default function Product() {
  const products  = useSelector((state) => state.products.items )

  const { productId } = useParams()

  const product = products.find((e) => e.id === Number(productId))
  return (
    <div style={{marginTop: '5rem'}}>
      <ProductId_Item product={product} />
      <ProductDisplay product={product}/>
      <Description/>

      <RelatedProducts/>
    </div>
  )
}
