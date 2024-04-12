import React, { useState, useReducer } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Navbar from '../Navbar/Navbar'
import './Hero.css'
import Best from '../Best/Best'
import { Nav } from 'react-bootstrap'
const Hero = () => {
  const [hover, setHover] = useState(0)
  let map = ["dfdf", "dfsf", "dsffs", "dsfd"]

  let reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case 'incremented_age': {
        return {
          name: state.name,
          age: state.age + 1
        };
      }
      case 'changed_name': {
        return {
          name: action.nextName,
          age: state.age
        };
      }
    }
    throw Error('Unknown action: ' + action.type);
  }

  const initialState = { name: 'Taylor', age: 42 };
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    });
  }
  const [inputdata, setInputdata] = useState("")



  const onMouseEnter=(inputString) => {
    var result = '';
    for (var i = 0; i < inputString.length; i++) {
      if (i % 2 == 0) {
        result += inputString[i].toUpperCase();
      } else {
        result += inputString[i].toLowerCase();
      }
    }
    setInputdata(result)
    };



  return (<>
    <Navbar />
    <div className='App'>
      <input onChange={(e) => { {setInputdata(e.target.value)};{onMouseEnter(e.target.value)} }}></input>
      <div >{inputdata}</div>
    </div>

    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>

    <div className='hero'>
      <div className='content'>
        <h1 className='burn'>Find What You Want</h1>
        <button onMouseEnter={() => {
          setHover(hover + 1)
        }}>
          hover me
        </button>
        <p>{hover}</p>



        <>
          <input
            value={state.name}
            onChange={handleInputChange}
          />
          <button onClick={handleButtonClick}>
            Increment age
          </button>
          <p>Hello, {state.name}. You are {state.age}.</p>
        </>






        <p className='search-text'>Search some this what you like </p>

        <select>
          {map.map((data, i) => {
            return <>
              <option style={{ backgroundColor: i == 0 ? "red" : i == 1 ? "yellow" : i == 2 ? "blue" : "pink" }}>
                {data}
              </option>

            </>
          })}
        </select>

        <form >
          <div>
            <input type="text" className="name" style={{ width: "65%" }} placeholder='Enter KeyWord...'></input>
          </div>
          <div style={{ marginTop: "-5%", marginLeft: "55%" }}>

            <button type="submit" style={{ color: "black", border: "none" }}> <AiOutlineSearch className="icon" /></button>
          </div>
        </form>
      </div>

    </div>
    <Best />
  </>
  )
}

export default Hero