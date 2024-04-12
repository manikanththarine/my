import React, { useState } from 'react'
import { SiCilium } from 'react-icons/si'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate()
    const [click, setClick] = useState(false)
    const [home, setHome] = useState(false)
    const [search, setSearch] = useState(false)
    const [about, setAbout] = useState(false)
    const [contact, setContact] = useState(false)
    const [marketing, setMarketing] = useState(false)
    const [details, setDetails] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const GetScreen = (e) => {
        if (e == "Home") {
            setHome(true)
            setSearch(false)
            setAbout(false)
            setContact(false)
            navigate('/Screen')
        } else if (e == "search") {
            setHome(false)
            setSearch(true)
            setAbout(false)
            setContact(false)
        } else if (e == "about") {
            setHome(false)
            setSearch(false)
            setAbout(true)
            setContact(false)
            navigate('/')

        } else if (e == "contact") {
            setHome(false)
            setSearch(false)
            setAbout(false)
            setContact(true)
            navigate('/Contact')

        }
        else if (e == "Details") {
            setHome(false)
            setSearch(false)
            setAbout(false)
            setContact(false)
            setDetails(true)
            navigate('/Details')

        } else if (e == "Sign_in") {
            navigate('/Signin')

        } else if (e == "Marketing") {
            setHome(false)
            setSearch(false)
            setAbout(false)
            setContact(false)
            setDetails(false)
            setMarketing(true)
            navigate('/Marketing')

        }
    }
    return (
        <>
            <div className='navbar'>
                <div className='container'>
                    <h1>
                        <SiCilium style={{color:"white"}} /><span style={{ color: 'red' }}>
                            Taaza
                        </span>
                        <span style={{ color: 'green' }}>kabar</span>

                    </h1>

                    <ul className={click ? "nav-menu active" : 'nav-menu'}>
                        <li>
                            <a onClick={() => GetScreen("Home")}  >Home
                            </a>
                        </li>
                        <li>
                            <a onClick={() => GetScreen("Details")}>Resume Builder
                            </a>
                        </li>

                        <li>
                            <a onClick={() => GetScreen("about")} >About
                            </a>
                        </li>
                        <li>
                            <a onClick={() => GetScreen("Marketing")} >Marketing
                            </a>
                        </li>
                        <li>
                            <a onClick={() => GetScreen("contact")} >Contact
                            </a>
                        </li>
                        <button className='btn'  onClick={() => GetScreen("Sign_in")} >Sign In</button>
                    </ul>
                    
                    <div className='hamburger' onClick={handleClick} style={{ color: "black" }}>
                        {click ? (<FaRegTimesCircle className='icon' style={{ color: 'black' }} />) : (<HiOutlineMenuAlt4 className='icon' style={{ color: 'black' }} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar