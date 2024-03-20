import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./Hotel.css"
import Mail from "../../components/mail/Mail"
import Footer from "../../components/footer/Footer"

const Hotel = () => {
  const [sliderNum, setSliderNum]  = useState(0);
  const [openslider, setOpenSlider]  = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i)=>
  {
    setSliderNum(i);
    setOpenSlider(true);
  }

  const handleMove = (direct)=>
  {
    let newSliderNum;
    if(direct ==="l")
    {
      newSliderNum = sliderNum ===0?5: sliderNum-1;
    }
    else{
      newSliderNum = sliderNum ===5?0: sliderNum+1;
    }
    setSliderNum(newSliderNum);

  }
  return (
    <>
    <Navbar/>
    <Header type ="list"/>
    <div className="hotelContainer">
     {openslider && <div className="slider">
      <FontAwesomeIcon icon = {faXmark} className='close'onClick={()=>setOpenSlider(false)}/>
      <FontAwesomeIcon icon={faArrowLeft} style={{"--fa-secondary-opacity": "0.4",}} className='arrow' onClick={()=>handleMove("l")}/>
      <div className="sliderWrapper">
        <img src={photos[sliderNum].src} alt="" className="sliderImg" />
      </div>
      <FontAwesomeIcon icon={faArrowRight} style={{"--fa-secondary-opacity": "0.4",}} className='arrow' onClick={()=>handleMove('r')}/>

      </div>}
      <div className="hotelWrapper">
        <button className="bookNow">Reserve Now</button>
        <h1 className="hotelTitle">
          Grand Hotel
        </h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>Elton Street 125 NewYork</span>
        </div>
        <div className="hotelDistance">
          <span>Exellent Location - 500m from station</span>
        </div>
        <div className="hotelPriceHighlight">
          <span>Book a stay over $114 property and get a free taxi for Airport/Railways</span>
        </div>
        <div className="hotelImages"> 
          {photos.map((photo,i)=>(
            <div className="hotelImgWrapper">
              <img src={photo.src} onClick = {()=> handleOpen(i)}alt="" className="hotelImg" />
            </div>
          ))}

        </div>
        <div className="hotelDetails">
          <div className="hotelDetailTexts">
            <h1 className="hotelTitle">Stay in the hearts of KaraKow</h1>
            <p className="hotelDesc">
            Located a 5-minute walk from St. Florian's Gate in Karakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for Days to spend</h1>
            <span>Located in the Heart of Karakow , this property has 
              an exellent location score of 9.8
            </span>
            <h2>
              <b>$250</b> for 2 days stay
            </h2>
            <button>Reserve Now</button>
          </div>
        </div>
      </div>
    <Mail/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Hotel