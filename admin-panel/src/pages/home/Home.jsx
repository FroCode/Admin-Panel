import React from 'react'
import './home.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
function Home() {
  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets/>
        </div>
      </div>
    </div>
  )
}

export default Home
