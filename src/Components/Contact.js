import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo-white.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

const Container = styled.div`
  width: 100vw;
  background-color: hsl(233, 26%, 24%);
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
const LogoAndSocialLinks = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding-top: 2em;
  .logo-image {
    object-fit: cover;
    width: 35%;
    align-self: center;
  }
  .social-links {
    align-self: center;
    padding-top: 1em;
    margin-left: 1em;
  }

  .social-links img {
    padding-right: 1em;
    width: 20%;
  }
  .social-links img:hover {
    filter: grayscale(100%) invert(0.25) sepia(1) saturate(12.1) hue-rotate(97.2deg)
      brightness(0.72);
  }
  @media only screen and (min-width: 1024px) {
    justify-content: space-between;

    .logo-image {
      width: 100%;
      margin-left: 40%;
      padding-left: 3em;
      align-self: flex-start;
    }
    .social-links {
      align-self: flex-start;
      margin-bottom: 20%;
      width: 100%;
      padding-left: 2em;
      margin-left: 50%;
    }
  }
`
const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1.2em;
  a {
    align-self: center;
    color: hsl(0, 0%, 98%);
    font-weight: 300;
    text-decoration: none;
    font-size: 16px;
    padding: 0.5em;
  }
  a:hover {
    color: hsl(136, 65%, 51%);
  }
  .first-block {
    display: flex;
    flex-direction: column;
  }
  .second-block {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    width: 30%;
    margin-left: 0%;
    justify-content: space-around;
    .first-block a {
      align-self: flex-start;
    }
    .second-block a {
      align-self: flex-start;
    }
  }
`
const ButtonAndC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2em;
  .invite-button {
    margin-top: 1em;
    width: 50%;
    align-self: center;
    font-size: 16px;
    border-radius: 12em;
    padding: 1em;
    border: none;
    cursor: pointer;
    color: hsl(0, 0%, 98%);
    background-image: linear-gradient(to right, #31d35c, #2bb7da);
  }
  .invite-button:hover {
    background-image: linear-gradient(to right, cyan, black);
  }
  p {
    margin-top: 1.5em;
    align-self: center;
    font-size: 14px;
    color: hsl(233, 8%, 62%);
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .invite-button {
      width: 30%;
    }
  }
  @media only screen and (min-width: 767px) and (max-width: 1023px) {
    .invite-button {
      width: 30%;
    }
  }
  @media only screen and (min-width: 1024px) {
    justify-content: space-around;
    width: 34%;
    .invite-button {
      width: 40%;
      margin-top: 2em;
    }
    p {
      align-self: flex-start;
      margin-left: 6em;
      font-size: 16px;
    }
  }
`

const Contacts = () => {
  return (
    <Container>
      <LogoAndSocialLinks>
        <img
          className="logo-image"
          src={logo}
          alt="logo of easy bank containing row of three slanting rectangles and word easybank"
          title="easybank"
        />
        <div className="social-links">
          <a href="/#">
            <img className="linkImage" src={facebook} alt="facebook icon" title="facebook icon" />
          </a>
          <a href="/#">
            <img src={youtube} alt="youtube icon" title="youtube icon" />
          </a>
          <a href="/#">
            <img src={twitter} alt="twitter icon" title="twitter icon" />
          </a>
          <a href="/#">
            <img src={pinterest} alt="pinterest icon" title="pinterest icon" />
          </a>
          <a href="/#">
            <img src={instagram} alt="instagram icon" title="instagram icon" />
          </a>
        </div>
      </LogoAndSocialLinks>
      <MenuLinks>
        <div className="first-block">
          <a href="/#">About Us</a>
          <a href="/#">Contact</a>
          <a href="/#">Blog</a>
        </div>
        <div className="second-block">
          <a href="/#">Careers</a>
          <a href="/#">Support</a>
          <a href="/#">Privacy Policy</a>
        </div>
      </MenuLinks>
      <ButtonAndC>
        <button data-message="This is from request invite button" className="invite-button">
          Request Invite
        </button>
        <p>© Easybank. All Rights Reserved</p>
      </ButtonAndC>
    </Container>
  )
}

export default Contacts
