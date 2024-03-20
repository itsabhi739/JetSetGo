import React from 'react'
import "./SearchItem.css"

const SearchItem = () => {
  return (
    <>
    < div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" srcSet="" className='siImg'/>
      <div className="siDesc">
        <h1 className="siTitle">Town Street Apartments</h1>
        <span className="siDistance">500m for center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubTitle">
          Studio Apartments with Air Conditioning
        </span>
        <span className="siFeatures">
          Entire Studio . 1 Bathroom . 21m*21m
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubTitle">
          You can cancel it later , we got great deals today!
        </span>
      </div>
      <div className="siDetails">
        <div className='siRating'>
          <span >Excellent</span>
          <button>8.9</button>
       </div>
        <div className="siDetailTexts">
          <span className="siPrice">
            120$
          </span>
          <span className="siTaxOp">
           Including all taxes and fees
          </span>
          <button className='siCheckButton'>See Availibility</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default SearchItem