import React from 'react'
import NavBar from './NavBar'
import './Products.css'

function Products() {
  return (
    <>
    <NavBar/>
        <div className="productsBackground">
            <div className="productsContainer">
                <div className="productsCard">
                    <div className="productTop"></div>
                    <div className="productBottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda tempore repellendus itaque provident facilis dignissimos iure, ex deserunt omnis.</div>
                </div>
                <div className="productsCard">
                    <div className="productTop"></div>
                    <div className="productBottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda tempore repellendus itaque provident facilis dignissimos iure, ex deserunt omnis.</div>
                </div>
                <div className="productsCard">
                    <div className="productTop"></div>
                    <div className="productBottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda tempore repellendus itaque provident facilis dignissimos iure, ex deserunt omnis.</div>
                </div>
                <div className="productsCard">
                    <div className="productTop"></div>
                    <div className="productBottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda tempore repellendus itaque provident facilis dignissimos iure, ex deserunt omnis.</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products