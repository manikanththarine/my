import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import img from "../screen/Earrings.jpg"
import img2 from "../screen/1 (1).jpg"
import img3 from "../screen/2 (1).jpg"
import img4 from "../screen/brace.jpg"
import img5 from "../screen/normal brace.jpg"
import img6 from "../screen/lion brace.jpg"
import "./screen.css"
const Screen = () => {
    const [feature_product, setFeature_Product] = useState([
        {
            image: img,
            name: "T-Cotton",
            price: "4521",
            brand: "M&M",
            rating: "5"
        },
        {
            image: img2,
            name: "T-Kurtha",
            price: "4222",
            brand: "M&M",
            rating: "4"
        },
        {
            image: img3,
            name: "T-Pattu_Langa",
            price: "7545",
            brand: "T&M",
            rating: "4"
        },
        {
            image: img4,
            name: "T-Chicken",
            price: "4555",
            brand: "M&T",
            rating: "2"
        },
        {
            image: img5,
            name: "T-Printed_Cotton",
            price: "4566",
            brand: "M&M",
            rating: "4"
        }
        ,
        {
            image: img6,
            name: "T-Pant",
            price: "2466",
            brand: "M&M",
            rating: "1"
        }
    ])
    const [fixbox, setFixbox] = useState([
        {
            image: img,
            Name: "Account"
        },
        {
            image: img,
            Name: "Number of Orders"
        },
        {
            image: img,
            Name: "Cash Back"
        },
        {
            image: img,
            Name: "All Orders"
        },
        {
            image: img,
            Name: "Shipping InFo"
        },
        {
            image: img,
            Name: "Cart Info"
        }
    ])
    const [new_product, setNew_Product] = useState([
        {
            image: img,
            name: "T-Cotton",
            price: "4521",
            brand: "M&M",
            rating: "5"
        },
        {
            image: img,
            name: "T-Kurtha",
            price: "4222",
            brand: "M&M",
            rating: "4"
        },
        {
            image: img,
            name: "T-Pattu_Langa",
            price: "7545",
            brand: "T&M",
            rating: "4"
        },
        {
            image: img,
            name: "T-Chicken",
            price: "4555",
            brand: "M&T",
            rating: "2"
        },
        {
            image: img,
            name: "T-Printed_Cotton",
            price: "4566",
            brand: "M&M",
            rating: "4"
        }
        ,
        {
            image: img,
            name: "T-Pant",
            price: "2466",
            brand: "M&M",
            rating: "1"
        }
    ])

    return (
        <div>
            <Navbar />
            <selection className='hero'>
                <h4>
                    Hi
                </h4>
                <h4>
                    All Items Are Ready To Sell

                </h4>
                <h>
                    <img src={img} style={{ marginTop: '-45%', marginLeft: "545%" }}></img>
                </h>
            </selection>

            <section className='feature'>
                {fixbox && fixbox.map((data, i) => {
                    return <>
                        <div className='fe-box'>
                            <img src={data.image} alt='' ></img>
                            <h6>
                                {data.Name}
                            </h6>
                        </div>

                    </>
                })}



            </section >

            <section id="product1" >
                <h2>
                    Feature products
                </h2>
                <p>
                    Summer Collections For New Seasion
                </p>
                <div className='pro-container'>
                    {feature_product && feature_product.map((data, i) => {
                        return <>
                            <div className='pro'>
                                <img src={data.image} ></img>
                                <div className='des'>
                                    <span>
                                        {data.name}
                                    </span>
                                    <h5>
                                        {data.brand}
                                    </h5>
                                    <div className='star'>
                                        {data.rating == 5 ?
                                            <> {data.rating}
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </>
                                            : data.rating == 4 ?
                                                <> {data.rating} <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>

                                                </>
                                                : data.rating == 3 ?
                                                    <> {data.rating} <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>

                                                    </>
                                                    : data.rating == 2 ?
                                                        <> {data.rating} <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>

                                                        </>
                                                        : data.rating == 1 ?
                                                            <> {data.rating} <i className="fas fa-star"></i>

                                                            </>
                                                            : ""}



                                    </div>
                                    <h4>{data.price}</h4>
                                </div>
                            </div>
                        </>
                    })}
                </div>

            </section>
            <section id='banner'>
                <h4>Repaire service</h4>
                <h2>up To <span>70% off</span> -All T-shirt & Accessories</h2>
                <button >  Explore more </button>
            </section>
            <section id="product1" >
                <h2>
                    New Arrival products
                </h2>
                <p>
                    summer Collections for new seasion
                </p>
                <div className='pro-container'>
                    {new_product && new_product.map((data, i) => {
                        return <>
                            <div className='pro'>
                                <img src={data.image} ></img>
                                <div className='des'>
                                    <span>
                                        {data.name}
                                    </span>
                                    <h5>
                                        {data.brand}
                                    </h5>
                                    <div className='star'>
                                        {data.rating == 5 ?
                                            <> {data.rating}
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </>
                                            : data.rating == 4 ?
                                                <> {data.rating} <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>

                                                </>
                                                : data.rating == 3 ?
                                                    <> {data.rating} <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>

                                                    </>
                                                    : data.rating == 2 ?
                                                        <> {data.rating} <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>

                                                        </>
                                                        : data.rating == 1 ?
                                                            <> {data.rating} <i className="fas fa-star"></i>

                                                            </>
                                                            : ""
                                        }
                                    </div>
                                    <h4>{data.price}</h4>
                                </div>
                                <a><button> Add </button></a>
                            </div>
                        </>
                    })}

                </div>

            </section>

            <section id="sm-banner" >
                <div className='banner-box'>
                    <h4>Crazy deals
                    </h4>
                    <h2>Buy 1 Get1 Free</h2>
                    <span>The Best Classic Dress is On Sale </span>
                    <button> Learn More</button>

                </div>
                <div className='banner-box banner-box2'>
                    <h4>Spring Details
                    </h4>
                    <h2>Up Comming Session</h2>
                    <span>Up Comming Products </span>
                    <button> Collection</button>

                </div>
            </section>

            <section id="banner3" >
                <div className='banner-box'>

                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% Off</h3>

                </div>
                <div className='banner-box banner-box3'>

                    <h2>New Foot ware collection</h2>
                    <h3>Spring summer</h3>

                </div>
                <div className='banner-box banner-box4'>

                    <h2> T-shirt SEASONAL Sale </h2>
                    <h3>New treand</h3>

                </div>
            </section>

            {/* <center>
                <div style={{ color: "white", marginTop: "15px", border: "2px solid", width: "30%", fontSize: "14px", borderRadius: "2px" }}>

                    <div style={{ border: "2px solid", borderColor: "yellow", width: "70%", marginTop: "15px", borderRadius: "2px" }}>Bundle & Save</div>
                    <div style={{ border: "2px solid", borderColor: "red", width: "70%", marginTop: "15px", height: "70px", borderRadius: "2px" }}>
                        <input type='checkbox' style={{ marginTop: "7%", align: "right" }}></input>
                        <span>1 pair DKK 195.00 &#8377;  50%off</span>
                    </div>
                    <div style={{ border: "2px solid", borderColor: "pink", width: "70%", marginTop: "15px", height: "70px", borderRadius: "2px" }}>
                        <input type='checkbox' style={{ marginTop: "7%" }}></input>
                        <span>2 pair DKK 195.00 &#8377;   <span style={{ color: "green" }}>Most Popular  </span><br />50%off</span>
                    </div>
                    <div style={{ border: "2px solid", borderColor: "black", width: "70%", marginTop: "15px", height: "70px", borderRadius: "2px" }}>
                        <input type='checkbox' style={{ marginTop: "7%" }}></input>
                        <span>3 pair DKK 195.00 &#8377;  50%off</span>
                    </div>
                    <span>Free 2 Day Shipping Total : DKK 360.00</span> <br />
                    <button> +Abb To Cart</button>

                </div>

            </center> */}
            <div>

            </div>
        </div>
    )
}

export default Screen