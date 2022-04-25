import React from 'react'
import NavBar from './NavBar'
import "./Home.css"

const Home = () => {
  return (
    <>
    <NavBar/>
        <div className="homeContainer">
            <div className="search">
                <input type="text" placeholder='Search'  />
                <button className='searchButton'>SEARCH</button>
            </div>
            <div className="content">
                <div className="card">
                    <div className="top1"></div>
                    <div className="bottom">
                        <h1>Galaxy</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium itaque ducimus. Debitis</p>
                    </div>
                </div>
                <div className="card">
                    <div className="top2"></div>
                    <div className="bottom">
                        <h1>Music</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium itaque ducimus. Debitis</p>
                    </div>
                </div>
                <div className="card">
                    <div className="top3"></div>
                    <div className="bottom">
                        <h1>Game</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium itaque ducimus. Debitis</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home