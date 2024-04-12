import Navbar from '../Navbar/Navbar'
import "./contact.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
    Modal,
    Container,
    Table,
    Carousel,
    CarouselItem,
} from "react-bootstrap";
import ad2 from '../../accects/ad2.png'
import { useState } from 'react';
import { toast } from 'react-toastify';
import MapPicker from 'react-google-map-picker'

const Contact = () => {

    const [name, setName] = useState("")
    const [phonenum, setPhonenum] = useState('')
    const [sub, setSub] = useState('')
    const [text, setText] = useState('')
    const [defaultLocation, setDefaultLocation] = useState({ lat: 17.4365, lng: 78.5204 });
    const [zoom, setZoom] = useState(10);

    const SendEmail = () => {
        if (name == "" || phonenum == "" || sub == "") {
            toast.warn("Please Enter all Fields")
        }
        else {
            let body = {
                to: "manikanththarine31@gmail.com",
                replyTo: "",
                cc: "",
                from: "manikanth@digialroof4.com",
                subject: "Call Back Enquiry",
                message: "Call Back Enquiry",
                html: `Hello , A callback request is raised by
                          Name: ${name}
                           Phone: ${phonenum}
                           Subject: ${sub}
                          Description: ${text}`,
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            };
            console.log(body)

            fetch(
                "https://dev-dr4-api.azurewebsites.net/mail/sendMail",
                requestOptions
            )
                .then((response) => response.json())
                .then((data) => {
                    setName('')
                    setPhonenum('')
                    setSub("")
                    console.log(data)
                    setText("")
                })
        }
    }

    return (
        <div >
            <Navbar />
            <div className='con' style={{ height: "360px" }}>
                <br /><br /><br />
                <h1>Our Mission </h1>
                <p style={{ fontSize: "25px" }}>This web site is to set your tast with lots of tast and happy</p>
                <br />
                <div>
                        
                            <MapPicker defaultLocation={defaultLocation}
                                zoom={zoom}
                                mapTypeId="roadmap"
                               style={{width:"50%",height:"50vh",margin:"auto"}}
                                apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' />
                       


                    </div>
            </div>            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='contact' >
                <h1 className='text'>Send Us a Message With Suggestions.</h1><br />
                <Container >
                    <Row>    
                       

                        <Col className='text2' >
                            <Col >
                                <Form.Group >
                                    <Form.Control className="name" type="type" onChange={e => { setName(e.target.value) }} placeholder="Enter Name" />
                                </Form.Group>
                            </Col><br />

                            <Col>
                                <Form.Group  >
                                    <Form.Control className="name" type="type" onChange={e => { setPhonenum(e.target.value) }} placeholder="Enter Phone Number"
                                        title="Enter 10 digit mobile number"
                                        pattern="[1-9]{1}[0-9]{9}"
                                        name="Mobile_number"
                                        id="Mobile_number"
                                        required />
                                </Form.Group>
                            </Col><br />

                            <Col>
                                <Form.Group  >
                                    <Form.Control className="name" type="type" onChange={e => { setSub(e.target.value) }} placeholder="Subject" />
                                </Form.Group>
                            </Col>
                            <br />

                            <Col>
                                <Form.Group>
                                    <Form.Control className="name" type="type" onChange={e => { setText(e.target.value) }} placeholder="Text" />
                                </Form.Group>
                            </Col>
                            <br />

                            <Col style={{ marginLeft: "20%" }}>
                                <Button onClick={() => SendEmail()}>
                                    Submit
                                </Button>
                            </Col>

                        </Col>
                        <Col className="img">
                            <img src={ad2} style={{ width: "60%" }}></img>
                        </Col>
                       
                    </Row>

                </Container>



            </div><br />

        </div>
    )
}

export default Contact