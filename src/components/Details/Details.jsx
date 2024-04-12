import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Modal, Row, Table } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import Navbar from '../Navbar/Navbar';
import html2pdf from 'html2pdf.js'
import { AiOutlineDownload } from "react-icons/ai";
import imag from '../../accects/myaccount.png'
const Details = () => {
    const [names, setNames] = useState("")
    const [fatherNames, setFatherName] = useState("")

    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [summary, setSummary] = useState("")
    const [specialties, setSpecialties] = useState("")
    const [experience, setExperience] = useState([
        {
            "companyname": "",
            "title": "",
            "city": "",
            "Startday": "",
            "endDay": "",
            "Decription": ""

        }
    ])
    const [education, setEducation] = useState([
        {
            "name": "",
            "course": "",
            "city": "",
            "Startday": "",
            "endDay": "",
            "Decription": ""

        }
    ])
    const [skills, setSkills] = useState("")
    const [achivements, setAchivements] = useState("")
    const [maritalstatus, setMaritalstatus] = useState("")
    const [declaration, setDeclaration] = useState("I hereby declare that all the details furnished above are true to the best of my knowledge. I assure you Of my best services at all times, if given an opportunity to grow with your esteemed organization.")
    const [place, setPlace] = useState("")
    const [image, setImage] = useState(imag)
    const [language, setLanguage] = useState("")
    const [hobies, SetHobies] = useState("")
    const [sex, setSex] = useState("")
    const [nationality, setNationality] = useState("")
    const [filesUploaded, setFilesUploaded] = useState([])

    const [projectDetails, setProjectDetails] = useState([
        {
            "title": "",
            "operatingsystam": "",
            "technology": "",
            "database": "",
            "role": "",
            "website": "",
            "Team Size": "",
            "Roles_and_Responsibilities": ""

        }
    ])
    const [certificats, setCertificates] = useState([
        {
            "Certificate": "",
            "title": "",
            "city": "",
            "PeriodStart": "",
            "Year": "",
            "Decription": ""

        }
    ])
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [openexp, setOpenexp] = useState(false)
    const [openedu, setOpenedu] = useState(false)
    const [opencer, setOpencer] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const Openexperience = (e) => {
        setOpenexp(!openexp)
    }
    const Openeducation = () => {
        setOpenedu(!openedu)
    }
    const OpenCertificats = () => {
        setOpencer(!opencer)
    }
    const nextButton1 = () => {
        setOne(false)
        setTwo(true)
        setThree(false)
    }
    const nextButton2 = () => {
        setOne(false)
        setTwo(false)
        setThree(true)
    }
    const nextButton3 = () => {
        setOne(false)
        setTwo(true)
        setThree(false)
    }
    const nextButton4 = () => {
        setOne(true)
        setTwo(false)
        setThree(false)
    }

    const OpenModel = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)

    }
    const getcompanydetatils = (e, index) => {
        const { name, value } = e.target;
        const list = [...experience];
        list[index][name] = value;
        setExperience(list);
    }
    const GetCertificate = (e, index) => {
        const { name, value } = e.target;
        const list = [...certificats];
        list[index][name] = value;
        setCertificates(list);

    }
    const GetEducation = (e, index) => {
        const { name, value } = e.target;
        const list = [...education];
        list[index][name] = value;
        setEducation(list);

    }
    const Addexperience = () => {
        setExperience([
            {
                "companyname": "",
                "title": "",
                "city": "",
                "Startday": "",
                "endDay": "",
                "Decription": ""

            }, ...experience
        ])

    }
    console.log(experience, "excp")
    console.log(education, "educ")
    console.log(certificats, 'cer')
    const remove = (index) => {
        const list = [...experience];
        list.splice(index, 1);
        setExperience(list);

    }

    const removeedu = (index) => {
        const list = [...education];
        list.splice(index, 1);
        setEducation(list);
    }

    const addedu = () => {
        setEducation([
            {
                "name": "",
                "course": "",
                "city": "",
                "Startday": "",
                "endDay": "",
                "Decription": ""

            }, ...education
        ])
    }


    const addCer = () => {
        setCertificates([
            {
                "name": "",
                "course": "",
                "city": "",
                "Startday": "",
                "endDay": "",
                "Decription": ""

            }, ...certificats
        ])

    }

    const removecer = (index) => {
        const list = [...certificats];
        list.splice(index, 1);
        setCertificates(list);
    }
    const genPdf = () => {
        const element = document.getElementById('Resume')
        var opt = {
            margin: [0.3, 0.5, 0.3, 0.2],
            filename: "resum.pdf",
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save()

    }
    const loadloadProfile = (event) => {
        let files = { ...filesUploaded }
        files['image'] = event.target.files[0]
        setFilesUploaded(files)
        var image = document.getElementById('profile');
        setImage(URL.createObjectURL(event.target.files[0]))
        // setProfileData(`https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net/dr4/${event.target.files[0].name}`)
        image.src = URL.createObjectURL(event.target.files[0]);
    };

    return (
        <div>
            <Navbar />

            <Container className="containers">
                <br />
                {one ?

                    <div >
                        <Row>
                            <Row>
                                <Col sm={6} lg={4} md={6} xs={6}>
                                    <div className="profile-image text-center">
                                        <div className="logo-placed" >
                                            <div id="profileImage2"></div>
                                            <img src={image} style={{ width: "100%", height: "100%" }} id="profile" />
                                        </div>
                                        <div className="file" >
                                            <input id="file" accept="image/*" type="file" onChange={(event) => loadloadProfile(event)} />
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                            <Row style={{ marginTop: "5%" }}>
                                <Col sm={6} lg={4} md={6} xs={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label><strong>First Name</strong> </Form.Label>
                                        <Form.Control type="text" value={names} onChange={(e) => { setNames(e.target.value) }} placeholder='First Name'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6} lg={4} md={6} xs={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label><strong>Last Name</strong> </Form.Label>
                                        <Form.Control type="text" value={lastName} placeholder='Last Name' onChange={(e) => { setLastName(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} lg={4} md={6} xs={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label><strong>Email</strong> </Form.Label>
                                        <Form.Control type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6} lg={4} md={6} xs={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label><strong>Phone Number</strong> </Form.Label>
                                        <Form.Control type="phonenumber" placeholder='Enter Phonenumber' maxLength="10" onChange={(e) => { setNumber(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} lg={8} md={6} xs={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label><strong>Specialties</strong> </Form.Label>
                                        <Form.Control type="text" placeholder='Specialties by coma' onChange={(e) => { setSpecialties(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Col>

                            </Row>
                            <Row>
                                <Col sm={6} lg={8} md={6} xs={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label><strong>Summary</strong> </Form.Label>
                                        <Form.Control type="textwrap" as="textarea" placeholder='Summary' onChange={(e) => { setSummary(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>


                        </Row>

                        <Button
                            type="button"
                            style={{ marginLeft: "62%", marginTop: "5%" }} onClick={nextButton1}
                        >
                            Next
                        </Button>
                    </div>
                    :
                    two ?
                        <div><Row>
                            <Col sm={6} lg={9} md={6} xs={6} style={{ marginTop: "15px" }}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><strong>Experience</strong> </Form.Label>
                                    {openexp ? "" : <Button style={{ marginLeft: "80%" }} onClick={(e) => { Openexperience(e) }}>ADD</Button>}
                                    {openexp ? <>{experience && experience.map((data, i) => {
                                        return (
                                            <div style={{ marginTop: "15px", backgroundColor: "#F7F4F4 " }}>
                                                <Row style={{ marginLeft: "2px" }}>
                                                    <Row style={{ marginTop: "10px" }}>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>Company Name</strong> </Form.Label>
                                                                <Form.Control type="text" placeholder='companyname' value={data.companyname} name="companyname" onChange={(e) => { getcompanydetatils(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>Title</strong> </Form.Label>
                                                                <Form.Control type="text" placeholder='title' value={data.title} name="title" onChange={(e) => { getcompanydetatils(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                    <Col sm={6} lg={5} md={6} xs={6}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label><strong>City</strong> </Form.Label>
                                                            <Form.Control type="text" placeholder='city' value={data.city} name="city" style={{ width: "97%" }} onChange={(e) => { getcompanydetatils(e, i) }}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Row>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>Start Date</strong> </Form.Label>
                                                                <Form.Control type="date" name="Startday" value={data.Startday} onChange={(e) => { getcompanydetatils(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>End Date</strong> </Form.Label>
                                                                <Form.Control type="date" name="endDay" value={data.endDay} onChange={(e) => { getcompanydetatils(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                    <Col sm={6} lg={10} md={6} xs={6}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label><strong>Decription</strong> </Form.Label>
                                                            <Form.Control type="textwrap" name="Decription" value={data.Decription} as="textarea" placeholder='Decription' style={{ width: "97%" }} onChange={(e) => { getcompanydetatils(e, i) }}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button onClick={(e) => { remove(i) }}>-</Button>
                                            </div>

                                        )
                                    })}
                                        <Button style={{ marginLeft: "80%" }} onClick={(e) => { Addexperience() }}>+</Button>

                                    </>
                                        : ""}

                                </Form.Group>
                            </Col>
                            <Col sm={6} lg={9} md={6} xs={6} style={{ marginTop: "15px" }}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label ><strong>Education</strong> </Form.Label>
                                    {openedu ? "" : <Button style={{ marginLeft: "81%", marginTop: "-5px" }} onClick={(e) => { Openeducation(e) }}>ADD</Button>}
                                    {openedu ? <>  {education && education.map((data, i) => {
                                        return (
                                            <div style={{ marginTop: "15px", backgroundColor: "#F7F4F4 " }}>
                                                <Row style={{ marginLeft: "2px" }}>
                                                    <Row style={{ marginTop: "10px" }}>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>College Name</strong> </Form.Label>
                                                                <Form.Control type="text" placeholder='CollageName' value={data.name} name="name" onChange={(e) => { GetEducation(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>Course</strong> </Form.Label>
                                                                <Form.Control type="text" placeholder='Course' name="course" value={data.course} onChange={(e) => { GetEducation(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                    <Col sm={6} lg={5} md={6} xs={6}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label><strong>City</strong> </Form.Label>
                                                            <Form.Control type="text" placeholder='city' name="city" value={data.city} style={{ width: "97%" }} onChange={(e) => { GetEducation(e, i) }}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Row>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>Start Date</strong> </Form.Label>
                                                                <Form.Control type="date" name="Startday" value={data.startday} onChange={(e) => { GetEducation(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>End Date</strong> </Form.Label>
                                                                <Form.Control type="date" name="endDay" value={data.endDay} onChange={(e) => { GetEducation(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                    <Col sm={6} lg={10} md={6} xs={6}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label><strong>Decription</strong> </Form.Label>
                                                            <Form.Control type="textwrap" name="Decription" as="textarea" placeholder='Decription' style={{ width: "97%" }} onChange={(e) => { GetEducation(e, i) }}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button onClick={(e) => { removeedu(e) }}>-</Button>

                                            </div>
                                        )
                                    })}
                                        <Button style={{ marginLeft: "81%" }} onClick={(e) => { addedu(e) }}>+</Button>
                                    </> : ""}

                                </Form.Group>
                            </Col>
                            <Col sm={6} lg={9} md={6} xs={6} style={{ marginTop: "15px" }}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label ><strong>Certificatios</strong> </Form.Label>
                                    {opencer ? "" : <Button style={{ marginLeft: "90.5%", marginTop: "-35px" }} onClick={(e) => { OpenCertificats(e) }}>ADD</Button>}
                                    {opencer ? <>  {certificats && certificats.map((data, i) => {
                                        return (
                                            <div style={{ marginTop: "15px", backgroundColor: "#F7F4F4 " }}>
                                                <Row style={{ marginLeft: "2px" }}>
                                                    <Row style={{ marginTop: "10px" }}>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>Certificate Name</strong> </Form.Label>
                                                                <Form.Control type="text" placeholder='Certificate Name' value={data.Certificate} name="Certificate" onChange={(e) => { GetCertificate(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>Title</strong> </Form.Label>
                                                                <Form.Control type="text" placeholder='Course' name="title" value={data.title} onChange={(e) => { GetCertificate(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                    <Col sm={6} lg={5} md={6} xs={6}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label><strong>City</strong> </Form.Label>
                                                            <Form.Control type="text" placeholder='city' name="city" value={data.city} style={{ width: "97%" }} onChange={(e) => { GetCertificate(e, i) }}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Row>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>Start Date</strong> </Form.Label>
                                                                <Form.Control type="date" name="PeriodStart" value={data.PeriodStart} onChange={(e) => { GetCertificate(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col sm={6} lg={5} md={6} xs={6}>
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label><strong>End Year</strong> </Form.Label>
                                                                <Form.Control type="date" name="Year" value={data.Year} onChange={(e) => { GetCertificate(e, i) }}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                    <Col sm={6} lg={10} md={6} xs={6}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label><strong>Decription</strong> </Form.Label>
                                                            <Form.Control type="textwrap" name="Decription" value={data.Decription} as="textarea" placeholder='Decription' style={{ width: "97%" }} onChange={(e) => { GetCertificate(e, i) }}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button onClick={(e) => { removecer(e) }}>-</Button>

                                            </div>
                                        )
                                    })}
                                        <Button style={{ marginLeft: "81%" }} onClick={(e) => { addCer(e) }}>+</Button>
                                    </> : ""}

                                </Form.Group>
                            </Col>
                        </Row>

                            <Button
                                type="button"
                                onClick={nextButton4} style={{ marginTop: "5%" }}
                            >
                                Back
                            </Button>
                            <Button
                                type="button"
                                style={{ marginLeft: "62%", marginTop: "5%" }} onClick={nextButton2}
                            >
                                Next
                            </Button>
                        </div>
                        :
                        three ?
                            <div>
                                <Row>
                                    <Row>
                                        <Col sm={6} lg={4} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><strong>Skills</strong> </Form.Label>
                                                <Form.Control type="phonenumber" placeholder='Skills by coma base' onChange={(e) => { setSkills(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6} lg={4} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><strong>Achivements</strong> </Form.Label>
                                                <Form.Control type="test" placeholder='Achivements by coma base' onChange={(e) => { setAchivements(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row style={{ marginTop: "4px" }}>
                                        <Form.Label><strong>Personaldetails :</strong> </Form.Label>

                                        <Col style={{ marginTop: "8px" }} sm={6} lg={4} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><strong>Father Name</strong> </Form.Label>
                                                <Form.Control type="text" placeholder='Father name' onChange={(e) => { setFatherName(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col sm={6} lg={4} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><strong>Marital Status</strong> </Form.Label>
                                                <Form.Control type="text" placeholder='Marital Status' onChange={(e) => { setMaritalstatus(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} lg={4} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><strong>Languages Know</strong> </Form.Label>
                                                <Form.Control type="text" placeholder='Languages by coma base' onChange={(e) => { setLanguage(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6} lg={4} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><strong>Nationality</strong> </Form.Label>
                                                <Form.Control type="text" placeholder='Nationality' onChange={(e) => { setNationality(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} lg={4} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><strong>sex</strong> </Form.Label>
                                                <Form.Control type="text" placeholder='sex' onChange={(e) => { setSex(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6} lg={4} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><strong>Hobies</strong> </Form.Label>
                                                <Form.Control type="text" placeholder='sex' onChange={(e) => { SetHobies(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Form.Label><strong>Place</strong> </Form.Label>
                                        <Col sm={6} lg={8} md={6} xs={6}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control type="text" placeholder='Place' onChange={(e) => { setPlace(e.target.value) }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                    <Form.Label><strong>Declaration</strong> </Form.Label>
                                    <Col sm={6} lg={8} md={6} xs={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="textwrap" as="textarea" placeholder='text' onChange={(e) => { setDeclaration(e.target.value) }}
                                            />
                                        </Form.Group>
                                    </Col>


                                </Row>
                                <Button
                                    type="button"
                                    onClick={nextButton3}
                                    style={{ marginTop: "5%" }}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="button"
                                    style={{ marginLeft: "54%", marginTop: "5%" }} onClick={OpenModel}
                                >
                                    Open
                                </Button>
                            </div>
                            : ""}
            </Container>
            <Modal show={showModal}
                onHide={closeModal}
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}>


                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <AiOutlineDownload style={{ width: "40px", height: '40px', color: 'Green', cursor: 'pointer' }} onClick={genPdf} />

                        Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container responsive>

                        <div id="Resume" >
                            <table  >

                                <thead>
                                    <tr >
                                        <th style={{ width: "20vh", color: "white", backgroundColor: "black" }}>
                                            <td>
                                                <div className="profile-image text-center" style={{ position: "absolute", top: "25px" }}>
                                                    <div className="logo-placed" style={{ width: "174px", height: "175px" }}>
                                                        <div id="profileImage2"></div>
                                                        <img src={image} style={{ width: "100%", height: "100%" }} id="profile" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div >
                                                    <h>Contact:
                                                    </h>
                                                    <i>
                                                        <p style={{ fontSize: "11px" }}>
                                                            {email}<br />
                                                            {number}
                                                        </p>
                                                    </i>
                                                </div>

                                            </td><br />
                                            <td>
                                                <div style={{ marginLeft: "0.5vw" }}>
                                                    <h>Top Skills:
                                                    </h>
                                                    <i><p style={{ fontSize: "11px" }}  >{skills}<br />
                                                    </p>
                                                    </i>
                                                </div>

                                            </td>
                                            <br />
                                            <td>
                                                <div style={{ marginLeft: "0.5vw" }}>
                                                    <h>
                                                        Certifications:
                                                        <br />
                                                    </h>

                                                    {certificats && certificats.map((data, i) => {
                                                        return <>

                                                            <div style={{ fontSize: "11px", lineHeight: "5px" }}>
                                                                <i><p >{data.Certificate}<br />
                                                                </p></i>
                                                            </div>

                                                        </>
                                                    })}
                                                </div>


                                            </td>
                                        </th>
                                        <td>
                                            <div >
                                                <div >
                                                    <h style={{ fontSize: "51px" }}>
                                                        <i><center>{names + lastName}</center></i>
                                                    </h>
                                                    <p style={{ marginTop: "-2%", fontSize: "12px" }}>
                                                        <i><center>Email: {email} </center></i>
                                                        <i><center>Number: {number}</center></i>
                                                    </p>
                                                </div>
                                                <div style={{ marginLeft: "2%" }}>
                                                    <h>
                                                        Summary:
                                                    </h>

                                                    <i style={{ fontSize: "12px" }}>
                                                        <p > {summary}</p>
                                                    </i>
                                                </div>
                                                <div style={{ marginLeft: "2%" }}>
                                                    <h>
                                                        Specialties:
                                                    </h>
                                                    <i style={{ fontSize: "12px" }}>
                                                        <p responsive > {specialties}</p>
                                                    </i>
                                                </div>
                                                <div style={{ marginLeft: "2%" }}>
                                                    <h>
                                                        Experience:
                                                    </h>
                                                    {experience.map((data, i) => {
                                                        return <>
                                                            <i style={{ fontSize: "12px" }}>
                                                                <p>
                                                                    <span><b>{data.companyname}</b></span> {data.Startday}    -    {data.endDay}
                                                                    <br />{data.title}
                                                                    <br />  {data.city}
                                                                    <p >{data.Decription}</p>
                                                                </p>


                                                            </i>
                                                        </>
                                                    })
                                                    }
                                                </div>
                                                <div style={{ marginLeft: "2%" }}>
                                                    <h>
                                                        Education:
                                                    </h>
                                                    {education && education.map((data, i) => {
                                                        console.log(data)
                                                        return <>
                                                            <i style={{ fontSize: "12px" }}>
                                                                <p>
                                                                    <span><b>{data.name}</b></span> {data.Startday}    -    {data.endDay}
                                                                    <br />{data.course}
                                                                    <br /> {data.city}
                                                                    <br />{data.Decription}
                                                                </p>


                                                            </i>
                                                        </>
                                                    })
                                                    }

                                                    <div>
                                                        <h>PROJECT DETAILS
                                                        </h>
                                                        <p>
                                                            <i style={{ fontSize: "12px" }}>
                                                                {projectDetails && projectDetails.map((data, i) => {
                                                                    return <>
                                                                        <div>
                                                                        </div></>
                                                                })}
                                                            </i>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div style={{ marginLeft: "2%" }}>
                                                    <div>
                                                        <h>
                                                            PROFESSIONAL ACHIEVEMENTS
                                                        </h>
                                                        <p>
                                                            <i style={{ fontSize: "12px" }}>
                                                                {achivements}
                                                            </i>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h>PERSONAL DETAILS
                                                        </h>
                                                        <p>
                                                            <i style={{ fontSize: "12px" }}>
                                                                <Row>
                                                                    <Col>Father Name
                                                                    </Col>
                                                                    <Col>:
                                                                    </Col>
                                                                    <Col>{fatherNames}
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col> Marital Status
                                                                    </Col>
                                                                    <Col>:
                                                                    </Col>
                                                                    <Col>{maritalstatus}
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>Languages
                                                                    </Col>
                                                                    <Col>:
                                                                    </Col>
                                                                    <Col>{language}
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>Nationality:
                                                                    </Col>
                                                                    <Col>
                                                                    </Col>
                                                                    <Col>{nationality}
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>   Sex
                                                                    </Col>
                                                                    <Col>:
                                                                    </Col>
                                                                    <Col>{sex}
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col> Hobies
                                                                    </Col>
                                                                    <Col>:
                                                                    </Col>
                                                                    <Col>{hobies}
                                                                    </Col>
                                                                </Row>


                                                            </i>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h>
                                                            Declaration:
                                                        </h>
                                                        <i>
                                                            <p style={{ fontSize: "15px", width: "92%" }}>
                                                                {declaration}
                                                                <p style={{ fontSize: "12px" }}>
                                                                    {place}
                                                                </p>
                                                            </p>

                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>




                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Details