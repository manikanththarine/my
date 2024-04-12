import React, {useEffect,useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Leftsidebar from './Leftsidebar'
import Rightsidbar from './Rightsidbar'
import stoc from "../../accects/img.jpg"
import imag from "../../accects/paytm.jpg"

const Onclick = () => {
    let userScreens = JSON.parse(sessionStorage.getItem("paragraph"))
    const [selectdata,setSelectdata]=useState([])
    const [blogdata, setBlogdata] = useState([
        {
            headding: "Sandur Manganese shares traded ex-bonus",
            image: stoc,
            date: "12/01/2024",
            paragraph: `Sandur Manganese shares traded ex-bonus today. As per the BSE filing of the company dated January 22, 2024,
            "Pursuant to Regulation 42 of SEBI (LODR) Regulations, 2015, the Board of Directors of the Company has fixed 
            Friday, 2 February 2024 as the Record Date for the purpose of determining the shareholders and their entitlement 
            for issue and allotment of Bonus Equity Shares.`
        },
        {
            headding: "Paytm News",
            image: imag,
            date: "02/02/2024",
            paragraph: `The role of fintechs in taking the country's economy on the path of growth is immense.
            Reserve Bank of India has given a major shock to Paytm, a major player in this segment. With this, 
            the Payments Bank, which is already struggling to survive the competitors, seems to have fallen 
            into more difficulties.`
        }
    ])
    useEffect(() => {
        let paragraph=[]
        blogdata&&blogdata.map((data,i)=>{
            if(userScreens.headding == data.headding){
                paragraph.push(data)
            }
        })
        setSelectdata(paragraph)

    },[])
    
  return (
    <div><Navbar />
            <marquee ><div className="marque">Today Deal login and sign up for best Contant</div></marquee>

    <div style={{ color: "black", marginLeft: "2%" }}>
        <Leftsidebar />
        <Rightsidbar />

        <div className='para'>
            {selectdata && selectdata.map((data, i) => {
                return <>

                    <h1 style={{ fontSize: "bold" }}>
                        {data.headding}
                    </h1>
                    <p><img style={{ width: "100%", height: "450px" }} src={data.image}></img>
                        {data.paragraph}
                    </p>
                    <hr></hr>
                    <br></br>
                </>
            })}


        </div>
    </div>
</div>
  )
}

export default Onclick