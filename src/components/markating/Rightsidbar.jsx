import React, { useState } from 'react'
import imag from "../../accects/paytm.jpg"
import ene from "../../accects/energy.jpg"
import soil from "../../accects/soil.jpg"
import ceme from "../../accects/Cement-Life.gif"
import { useNavigate } from 'react-router-dom';
import "./marketing.css"
import { Col, Container, Nav, Row } from 'react-bootstrap';
import stoc from "../../accects/img.jpg"

const Rightsidbar = () => {
    const navigate = useNavigate()
  
    const [recommended, setRecommended] = useState([
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
        },
        {
            headding: "Energy Levels",
            image: ene,
            date: "4/5/2023"

        },
        {
            headding: "Soil",
            image: soil,
            date: "25/11/2023"

        },
        {
            headding: "cement",
            image: ceme,
            date: "5/4/2023"

        }
    ])

    const getData=(d)=>{
        sessionStorage.setItem('paragraph', JSON.stringify(d))
        navigate(`/Onclick/${d.headding}`)
        window.location.reload(false);

    }
    return (
        <div>
            <div className='sidenav'>
                <div className='divrow'>
                    <Row className='row' style={{position:"fixed"}}>
                    <h6>Recommended For You</h6>
                    <hr></hr>

                        {recommended && recommended.map((data, i) => {
                            return <>

                                <br />
                                <Col>
                                    <span onClick={(e)=>{getData(data)}}>{data.headding}</span>
                                    <br />
                                    <span style={{ fontSize: "10px" }}>{data.date}</span>
                                </Col>
                                <Col sm="3">
                                    <img src={data.image} style={{borderRadius:"6px",margin:"8px 8px"}}>
                                    </img>
                                </Col>
                                <br />

                                <hr></hr>
                            </>
                        })}

                        

                    </Row>


                </div>
            </div></div>
    )
}

export default Rightsidbar