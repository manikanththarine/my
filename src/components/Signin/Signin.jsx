import React from 'react'
import Navbar from '../Navbar/Navbar'
import Button from "react-bootstrap/Button";
import ad2 from '../../accects/ad2.png'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Signin.css"
const Signin = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [password, setPassword] = useState('')

    const getUser = () => {
        if (name == "" || password == "") {
            const conform = window.confirm("Please Enter all Fields")
            // toast.warn("Please Enter all Fields")
        }
        else {
            if (name == "Manikanth" && password == "Tharine@123") {
                navigate('/AdminPage')
                sessionStorage.setItem('name', JSON.stringify("manikanth"))

            } else {
                toast("Please Enter Correct Details")
            }
        }
    }
    const loc = useLocation()
    console.log(loc)
    return (
        <>
            <Navbar />
          
            <center>
                <div className="main">

                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={ad2} alt="profile" className="profile" />

                            </div>


                        </div>
                        <div>
                            <h2 style={{ color: "white" }}>Login Page</h2>
                            <br />
                            <div className='input-box'>
                                <input type="text" placeholder='User Id' onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <hr style={{ border: '2x solid' }}></hr>
                            <div className="input-box">
                                <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />

                            </div>
                            <div>
                                <button className="login-button" onClick={(e) => { getUser() }}>Login</button>
                            </div>

                            <p className="link">
                                <a >Forgot password</a>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <a > Sign Up</a>
                            </p>


                        </div>
                    </div>


                </div>
            </center>
            <br /><br /><br /><br /><br /><br />




        </>
    )
}

export default Signin