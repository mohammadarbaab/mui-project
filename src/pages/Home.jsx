import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/bg.jpg'
import '../styles/HomeStyle.css'

const Home = () => {
  return (
    <Layout>
    <div className='home' style={{backgroundImage:`url(${Banner})`, }}>
      <div className='container'>
        <h1>Food website</h1>
        <p>BEST fOOD</p>
        <Link to='/menu'>
        <button>order now</button>
        </Link>
      </div>
    </div>
    </Layout>
  )
}

export default Home
