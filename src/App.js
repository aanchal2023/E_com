import React from 'react'
import MyjsonData from './Component/Card/MyjsonData'
import Navbar from './Component/NavBar/Navbar'
// import Pagination from './Component/Pagination/Pagination'
import MyCart from './Component/Cart/MyCart'
import Form from './Component/Form/Form'
import Loginpage from './Component/Login/Loginpage'
import FilterButton from './Component/FilterButton/FilterButton'
import Signup from './Component/Signup/Signup'
import SortBy from './Component/SortBy/SortBy'
import Mydata from './Component/circle/Mydata'
import Paymentpage from './Component/Payment/Paymentpage'

function App() {
  return (
    <>
    <Navbar/>
    <Form/>
    <MyjsonData/>
     <MyCart/>
     <Loginpage/>
     <FilterButton/>
     <Signup/>
     <SortBy/>
     <Mydata/>
     <Paymentpage/>
    {/* <Pagination/> */}
    </>
  )
}

export default App