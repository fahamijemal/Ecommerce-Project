import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Hero from '../components/Hero'
const Home = () => {
  return (
    <>
   
   <Navbar/>
   <Hero/>
 
    <h1 className='text'>Welcome to DEVSQUAD SHOPPING – Your One-Stop Shop <br />for Everything You Need!</h1>
    <div>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    
    </>
   
  )
}

export default Home