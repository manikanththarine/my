import React, { useState } from 'react'
import ad1 from '../../accects/ad1.png'
import ad2 from '../../accects/ad2.png'
import ad3 from '../../accects/ad3.jpg'
import './Best.css'
const Best = () => {
  const [commercial, setCommercial] = useState(true)
  const [residantel, setResidantel] = useState(false)
  const [agriculture, setAgriculture] = useState(false)
  const [all, setAll] = useState(false)
  const getCustomer = (e) => {
    if (e == "Projects") {
      setCommercial(true)
      setResidantel(false)
      setAgriculture(false)
      setAll(false)

    } else if (e == "RegularPratic") {
      setResidantel(true)
      setAgriculture(false)
      setCommercial(false)
      setAll(false)

    } else if (e == "Subject") {
      setAgriculture(true)
      setCommercial(false)
      setResidantel(false)
      setAll(false)

    } else if (e == "All") {
      setAgriculture(false)
      setCommercial(false)
      setResidantel(false)
      setAll(true)
    }
    console.log(e)
  }
  return (
    <div className='best'>
      <h1>Find Best You Like</h1>
      <div >
        <p className='cur'style={{ borderBottom: commercial || residantel || agriculture ? "" : "2px solid rgb(154, 210, 243)" }} onClick={() => getCustomer("All")}><span>All</span></p>
        <p className='cur'style={{ borderBottom: all || residantel || agriculture ? "" : "2px solid rgb(154, 210, 243)" }} onClick={() => getCustomer("Projects")}>Tast of Hyderabad</p>
        <p className='cur'style={{ borderBottom: commercial || all || agriculture ? "" : "2px solid rgb(154, 210, 243)" }} onClick={() => getCustomer("RegularPratic")}>Locations</p>
        <p className='cur'style={{ borderBottom: commercial || residantel || all ? "" : "2px solid rgb(154, 210, 243)" }} onClick={() => getCustomer("Subject")}>Subject</p>
      </div>

      {commercial ?
        <div className='container'>
          <span> Grilled Chicken Escalope with Fresh Salsa</span>
          <span> Mutton Korma</span>
          <span> Pina Colada Pork Ribs</span>
          <span> Tandoori Lamb Chops</span>
          <span> Malabar Fish Biryani </span>
          <span> Keema Samosa with Yoghurt Dip</span>
          <span>Curried Parmesan Fish Fingers </span>
          <span>Chicken 65 </span>
          <span> Goan Prawn Curry With Raw Mango</span>
          <span> Nihari Gosht</span>
          <span> Butter Chicken </span>
          <span> Hyderabadi Chicken Fry </span>
          <span> Hyderabadi Keema</span>
          <span>Butter Chicken </span>
          <span> Chicken 65</span>
          <span> Malabar Fish curry</span>
          <span> Mutton Curry </span>
          <span> Tandoori chicken</span>
          <span> Pork Ribs</span>
          <span>Egg Bhurji </span>
          <span> Tunde Kabab</span>
          <span>Chicken Chettinad </span>
          <span>Haleem</span>

        </div> :
        residantel ?
          <div className='container'>
            <span>Hotel Shadab (charminar) </span>
            <span>Paradise (Paradise,Hyderabad ) </span>
            <span>Kritunga Bhadra Restaurant (Gachibowli,Habsiguda)</span>
            <span>Bawarchi Restaurant (RTC X Rd) </span>
            <span>Al-Arabian Mandi (King Koti) </span>
            <span>MANDI @ 36 Arabian kitchen (Jubilee Hills) </span>
            <span>The Nawaab's Restaurant (Banjara Basthi,Gachibowli) </span>
            <span> Al-Saba Restaurant (Diamond Hills)</span>
            <span>Pista House (Charminar)</span>

          </div> :
          agriculture ?
            <div >
              <span style={{ fontSize: "35px" }}>Trying To Explain Best Taste In World<br /> <br /></span>
            </div> : all ?

              <div className='container'>
                <span>Hotel Shadab (charminar) Best In Biryani's</span>
                <span>Paradise (Paradise,Hyderabad ) Best In Veg Biryani's</span>
                <span>Kritunga Bhadra Restaurant (Gachibowli,Habsiguda) Tast With Best Spice's</span>
                <span>Bawarchi Restaurant (RTC X Rd) Best In Biryani's</span>
                <span>Al-Arabian Mandi (King Koti) Best In Mandi's</span>
                <span>MANDI @ 36 Arabian kitchen (Jubilee Hills) Best In Mandi's</span>
                <span>The Nawaab's Restaurant (Banjara Basthi,Gachibowli) Best In Non-veg Food's </span>
                <span> Al-Saba Restaurant (Diamond Hills) Best In Mandi's</span>
                <span>Pista House (charminar) Best in Haleem</span>
              </div> : ""}




      {/* <button className='btn'>View All</button> */}
    </div>
  )
}

export default Best