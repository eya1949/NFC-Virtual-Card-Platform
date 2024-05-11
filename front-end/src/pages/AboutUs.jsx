import React from 'react'


function AboutUs() {
  return (
    <>
    <div className="app">
      <div className="panel">
      <img className='background-image' src='\src\Assets\aboutus.png' alt="Background" />
        <div className="container">
        <h2 className="title">
              {" "}
              Biomimicry:
              <br />
              Learning From
              <br />
              The Genius of Nature
            </h2>          <button className="btn"> Learn More </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs