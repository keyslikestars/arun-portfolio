import React from 'react'
import './portfolio.scss';

function Portfolio() {
  return (
    <div className='gallery-container'>
        <div className="gallery-wrapper">
            <div className="gallery-title">
                <h3>GALLERY</h3>
                <p>My Creative Works</p>
            </div>
            <div className="gallery-tabs">
                <a href="" className="tab-btn active">All</a>
                <a href="" className="tab-btn">Web Design</a>
                <a href="" className="tab-btn">Gallery</a>
                <a href="" className="tab-btn">Templates</a>
            </div>
        </div>
    </div>
  )
}

export default Portfolio