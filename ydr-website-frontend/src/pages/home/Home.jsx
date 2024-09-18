import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
import Products from '../../components/products/Products'
import Blogs from '../../components/blogs/Blogs'


const Home = () => {
  return (
      <div>
      <Carousel />
      <Products />
      <Blogs/>
    </div>
  )
}

export default Home