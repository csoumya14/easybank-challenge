import React from 'react'
import backgroundImage from '../images/bg-intro-mobile.svg'
import desktopBackground from '../images/bg-intro-desktop.svg'
import phoneImages from '../images/image-mockups.png'
import styled from 'styled-components'

const OuterContainer = styled.div`
  width: 100vw;
  background-color: hsl(0, 0%, 98%);

  @media only screen and (min-width: 1024px) {
    height: 55vw;
  }
`
const ImageContainer = styled.div`
  width: 100vw;
  height: 55vh;

  .background {
    width: 100vw;
    min-width: 100%;
    max-width: 100%;
    height: 66em;
    margin-top: 0%;
    overflow: hidden;
  }
  .image-phones {
    width: 100%;
    height: 55%;
    position: absolute;
    overflow: hidden;
  }
  .phones-img {
    width: 90vw;
    margin-top: -17%;
    margin-left: 2%;
  }
  .desktop-image {
    display: none;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    height: 90vw;
    .background-image {
      width: 95vw;
    }
    .image-phones {
      height: 100%;
      overflow: visible;
    }
    .phones-img {
      margin-top: -25%;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 90vw;
    .background-image {
      width: 95vw;
    }
    .image-phones {
      height: 100%;
      overflow: visible;
    }
    .phones-img {
      margin-top: -20%;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 50vw;
    position: absolute;
    margin-left: 50%;
    .background {
      width: 100vw;
      min-width: 100%;
      max-width: 100%;
      height: 100vw;
      overflow: hidden;
      margin-top: 0%;
    }
    .background-image {
      display: none;
    }
    .desktop-image {
      display: block;
      margin-left: -10%;
      margin-top: -23%;
    }
    .image-phones {
      width: 100%;
      height: 100vw;
      position: absolute;
      overflow: hidden;
    }
    .phones-img {
      width: 55vw;
      margin-top: -3%;
      margin-left: 17%;
      overflow: hidden;
    }
  }
`

const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 1em;
  .heading {
    font-weight: 300;
    color: hsl(233, 26%, 24%);
  }
  .paragraph {
    color: hsl(233, 8%, 62%);
    width: 99%;
    line-height: 1.5em;
    font-size: 16px;
    font-weight: 300;
  }
  .invite-button {
    margin-top: 1em;
    margin-bottom: 2em;
    width: 50%;
    align-self: center;
    font-size: 16px;
    border-radius: 12em;
    padding: 1em;
    border: none;
    cursor: pointer;
    color: hsl(0, 0%, 100%);
    background-image: linear-gradient(to right, #31d35c, #2bb7da);
  }
  .invite-button:hover {
    background-image: linear-gradient(to right, cyan, black);
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-top: 5%;
    .paragraph {
      width: 60%;
      align-self: center;
      font-size: 18px;
    }
    .invite-button {
      width: 30%;
      margin-bottom: 5em;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .paragraph {
      width: 60%;
      align-self: center;
      font-size: 18px;
    }
    .invite-button {
      width: 30%;
      margin-bottom: 5em;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 50vw;
    margin-left: 10%;
    justify-content: space-between;
    text-align: left;
    .heading {
      margin-top: 7em;
      width: 40%;
      font-weight: 300;
      color: hsl(233, 26%, 24%);
    }
    .paragraph {
      width: 64%;
      align-self: flex-start;
      font-size: 18px;
    }
    .invite-button {
      width: 30%;
      margin-bottom: 5em;
      align-self: flex-start;
      margin-left: 0%;
      margin-bottom: 2em;
    }
  }
`

const FirstSection = () => {
  return (
    <OuterContainer>
      <ImageContainer>
        <div className="image-phones">
          <img src={phoneImages} alt="phone" className="phones-img" />
        </div>
        <div className="background">
          <img src={backgroundImage} alt="phone" className="background-image" />
          <img src={desktopBackground} alt="phone" className="desktop-image" />
        </div>
      </ImageContainer>
      <TextAndButtonContainer>
        <h1 className="heading">Next generation digital banking</h1>
        <p className="paragraph">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <button data-message="This is from request invite button" className="invite-button">
          Request Invite
        </button>
      </TextAndButtonContainer>
    </OuterContainer>
  )
}

export default FirstSection
