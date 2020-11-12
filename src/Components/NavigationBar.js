import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import { useViewPort } from './customViewPort'

const Container = styled.div`
  width: 100vw;
  margin-top: -1em;
  background-color: #fff;
  position: absolute;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  .logo {
    width: 50%;
    padding-top: 8%;
    padding-left: 1em;
    padding-bottom: 1em;
  }

  .invite-button {
    display: none;
  }
  .menu {
    position: absolute;
    left: 50%;
    top: 61vw;
    transform: translate(-50%, -50%);
    padding: 5px 5px;
    border: 1px solid black;
    width: 90%;
    height: 75vw;
    border-radius: 8px;
    background-color: #fff;
    z-index: 999;
    text-align: center;
  }
  .menu ul {
    display: block;
    list-style-type: none;
    padding: 0px;
    overflow: hidden;
  }
  .menu ul li a {
    display: block;
    position: relative;
    text-decoration: none;
    color: hsl(233, 26%, 24%);
    padding: 0.7em;
    width: 80vw;
    &:after {
      content: '';
      height: 5px;
      position: absolute;
      bottom: 0;
      top: 2em;
      left: 30vw;
      width: 0%;
      background: hsl(136, 65%, 51%);
      transition: 0.2s;
    }
    &:hover:after {
      width: 4em;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .logo {
      width: 30%;
    }
    .menu {
      top: 45vw;
      border: 1px solid transparent;
      height: 50vw;
    }
    .menu ul li a {
      &:after {
        top: 2em;
        left: 35vw;
        width: 0%;
        background: hsl(136, 65%, 51%);
        transition: 0.2s;
      }
      &:hover:after {
        width: 4em;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .logo {
      width: 30%;
      padding-top: 5%;
    }
    .menu {
      top: 40vw;
      border: 1px solid transparent;
      transform: translate(-50%, -50%);
      padding: 5px 5px;
      width: 60%;
      height: 45vw;
    }
    .menu ul li a {
      padding: 1em;
      width: 60vw;

      &:after {
        top: 3em;
        left: 27vw;
        width: 0%;
        background: hsl(136, 65%, 51%);
        transition: 0.2s;
      }
      &:hover:after {
        width: 3em;
      }
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .logo {
      padding-top: 3%;
      padding-bottom: 3%;
      margin-left: 10%;
      width: 12%;
    }
    .menu {
      position: relative;
      left: 3%;
      top: 1vw;

      transform: translate(0%, 0%);
      padding: 0px 2px;
      border: 1px solid transparent;
      width: 40%;
      height: 5vw;
      border-radius: 8px;
      background-color: transparent;
      z-index: 0;
      text-align: center;
    }
    .menu ul {
      display: flex;
      list-style-type: none;
      float: left;
      padding: 0px;
      overflow: visible;
    }
    .menu ul li a {
      display: inline-block;
      float: left;
      text-decoration: none;
      color: hsl(233, 26%, 24%);
      padding-right: 4em;
      width: 1em;
      &:after {
        content: '';
        height: 5px;
        position: absolute;
        bottom: 0;
        top: 3em;
        left: 8px;
        width: 0%;
        background: hsl(136, 65%, 51%);
        transition: 0.2s;
      }
      &:hover:after {
        width: 4em;
      }
    }
    .invite-button {
      display: block;
      margin-top: 0%;
      margin-right: 10%;
      cursor: pointer;
      width: 12%;
      align-self: center;
      font-size: 16px;
      border-radius: 12em;
      padding: 1em;
      border: none;
      color: hsl(0, 0%, 100%);
      background-image: linear-gradient(to right, #31d35c, #2bb7da);
    }
    .invite-button:hover {
      background-image: linear-gradient(to right, cyan, black);
    }
  }
`
const HambImg = styled.input`
  padding-top: 8%;
  padding-right: 1.4em;
  object-fit: cover;
  height: 50%;
  display: ${({ open }) => (open ? 'none' : 'block')};
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    padding-right: 8%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding-right: 15%;
    padding-top: 6%;
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`
const CloseImg = styled.input`
  padding-top: 8%;
  padding-right: 1.4em;
  object-fit: cover;
  height: 50%;
  display: ${({ open }) => (open ? 'block' : 'none')};
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    padding-right: 8%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding-right: 15%;
    padding-top: 6%;
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

const NavigationBar = () => {
  const [isSmallScreen] = useViewPort()
  const [open, setOpen] = useState(false)

  const dropdownListRef = useRef(null)
  const Options = ['Home', 'About', 'Contact', 'Blog', 'Careers']
  const toggleNav = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open) {
      dropdownListRef.current.querySelector('a').focus()
    }
  }, [open])

  return (
    <Container>
      <img src={logo} className="logo" alt="easybank-logo" />

      <HambImg
        type="image"
        tabIndex="0"
        src={hamburger}
        className="hamburger-logo"
        alt="drop-down button"
        title="logo-hamburger"
        onClick={toggleNav}
        open={open}
        aria-haspopup="true"
        aria-controls="dropdown1"
      ></HambImg>
      <CloseImg
        src={close}
        type="image"
        className="close-logo"
        alt="close button"
        title="close button"
        onClick={toggleNav}
        open={open}
        aria-controls="dropdown1"
      ></CloseImg>

      {(!isSmallScreen || open) && (
        <nav className="menu" open={open} id="dropdown1">
          <ul ref={dropdownListRef} tabIndex="-1">
            {Options.map((item, index) => {
              return (
                <li key={index}>
                  <a href="/#">{item}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
      {!isSmallScreen ? (
        <button data-message="This is from request invite button" className="invite-button">
          Request Invite
        </button>
      ) : (
        ''
      )}
    </Container>
  )
}

export default NavigationBar
