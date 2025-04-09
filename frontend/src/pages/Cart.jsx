import React from 'react'
import CartPage from '../components/cart/CartPage'
import ShopBanner from '../components/shop/shopBanner'
import ProductSlider from '../components/home/productslider'
import CartBanner from '../components/cart/CartBanner'

const cart = () => {
  return (
    <>
    <CartBanner/>
    <CartPage/>
    <ProductSlider/>
    
    </>
  )
}

export default cart