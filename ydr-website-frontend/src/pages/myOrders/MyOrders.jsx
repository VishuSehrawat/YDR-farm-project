import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import {StoreContextApi} from '../../context/StoreContext'
import axios from 'axios'

const MyOrders = () => {

  const { backendUrl, token } = useContext(StoreContextApi)
  const [data, setData] = useState([])
  
  const fetchOrders = async () => {
    const response = await axios.post(backendUrl + '/api/order/userOrders', {}, { headers: { token } })
    console.log('orders fetched',response.data.userOrders)
  }

  useEffect(() => {
    if (token) {
      fetchOrders()
    }
  },[token])


  return (
    <div>MyOrders</div>
  )
}

export default MyOrders