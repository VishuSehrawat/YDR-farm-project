import React, { useContext, useEffect } from 'react'
import './VerifyOrder.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import  { StoreContextApi } from '../../context/StoreContext'
import axios from 'axios'

const VerifyOrder = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const success = searchParams.get('success')
    const sessionId = searchParams.get('sessionId')

    const { backendUrl } = useContext(StoreContextApi)
    
    const navigate=useNavigate()

    const verifyPayment = async () => {
        const response = await axios.post(backendUrl + '/api/order/verifyOrder', { success, sessionId })
      console.log(response)
      
      if (response.data.success) {
        navigate('/myOrders')
      } else {
        navigate('/')
      }
  }
  
  useEffect(()=>{verifyPayment()},[])
  return (
    <div>VerifyOrder</div>
  )
}

export default VerifyOrder