import React from 'react'
import { Button } from 'react-bootstrap'
import { BsFillHouseFill } from 'react-icons/bs'
import {
    Table
} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate()

    const user = sessionStorage.getItem('name')
    const userName = JSON.parse(user)
    console.log(userName)

    const SignOut = () => {
        sessionStorage.clear()
        navigate('/Signin')
    }
    return (
        <div>
            {/* {userName == null ? <><div>
            Please Login</div></> : */}
            <>
                <div className='navbar'>
                    <div className='container'>
                        <h1>
                            <span>
                                <BsFillHouseFill />Char
                            </span> Kaman
                        </h1>
                        <Button style={{ cursor: "pointer", textAlign: "right" }} onClick={() => { SignOut() }} >Sign Out</Button>
                    </div>
                </div>
                <div>

                </div>
            </>

            {/* } */}

        </div>
    )
}

export default AdminPage