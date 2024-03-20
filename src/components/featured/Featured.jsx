import React from 'react'
import "./Featured.css"

const Featured = () => {
  return (
    <>
    <div className="featured">
        <div className="featuredItem">
            <img src=".\assets\mumbai.jpg" alt="" srcSet="" className='featuredImg' />
        <div className="featuredTitles">
            <h1 className='featuredtext1'>
                Indore
            </h1>
            <h3 className='featuredText2'>
                123 properties
            </h3>
        </div>
        </div>

        <div className="featuredItem">
            <img src=".\assets\mumbai.jpg" alt="" srcSet="" className='featuredImg' />
        <div className="featuredTitles">
            <h1 className='featuredtext1'>
                Mumbai
            </h1>
            <h3 className='featuredText2'>
                67 properties
            </h3>
        </div>
        </div>

         <div className="featuredItem">
            <img src=".\assets\mumbai.jpg" alt="" srcSet="" className='featuredImg' />
        <div className="featuredTitles">
            <h1 className='featuredtext1'>
                Delhi
            </h1>
            <h3 className='featuredText2'>
                456 properties
            </h3>
        </div>
    </div>
        </div>
    </>
  )
}

export default Featured