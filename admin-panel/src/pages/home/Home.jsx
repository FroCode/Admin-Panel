import React from 'react'
import './home.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Chart from '../../components/charts/Charts'
import Featured from '../../components/feautured/Featured'
import Table from '../../components/table/Table'
function Home() {
  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          
          <Chart title="Last ( 6 months ) " aspect={2/1}/>
        </div>
        <div className="listContainer">
          <Table />
        </div>
          
      </div>
    </div>
  )
}

export default Home
