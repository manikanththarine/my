import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='social' style={{ color: "black" }}>
                    <FaFacebook className='icon' />
                    <span style={{ color: "black" }}>Facebook</span>
                    <FaInstagram className='icon' />
                    <span style={{ color: "black" }}>Instagram</span>
                    <FaTwitter className='icon' />
                    <span style={{ color: "black" }}>Twitter</span>

                </div>
                <div >
                    <div style={{ textAlign: "center", color: 'black' }}>
                        <h3>About</h3>
                        <p>Company</p>

                    </div>
                    <div style={{ textAlign: "center", color: 'black' }}>
                        <h3>Terms and Conditions</h3>
                        <p style={{ fontSize: "9px" }}>Copyright © 2023 Char Kaman Private Limited. All rights reserved.<br />
                            Unless otherwise indicated, all materials on these pages are copyrighted by Char Kaman Private Limited. All rights reserved. No part of these pages, either text or image may be used for any purpose.</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer