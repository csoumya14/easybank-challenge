import React from 'react'
import styled from 'styled-components'
import onlineBanking from '../images/icon-online.svg'
import budget from '../images/icon-budgeting.svg'
import onboard from '../images/icon-onboarding.svg'
import api from '../images/icon-api.svg'

const Container = styled.div`
  background-color: hsl(220, 16%, 96%);
  width: 100vw;
  .heading-para {
    text-align: center;
    padding-top: 3em;
  }
  .heading2 {
    margin-left: 25%;
    font-weight: 300;
    color: hsl(233, 26%, 24%);
    width: 50%;
  }
  .para {
    color: hsl(233, 8%, 62%);
    width: 99%;
    line-height: 1.5em;
    font-size: 16px;
    font-weight: 300;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2.5em;
    padding-bottom: 3em;
  }
  .flex-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .flex-div img {
    width: 20%;
    margin: 0.8em;
    align-self: center;
    object-fit: cover;
  }
  .flex-div h3 {
    font-weight: 300;
    align-self: center;
    color: hsl(233, 26%, 24%);
  }
  .flex-div p {
    color: hsl(233, 8%, 62%);
    text-align: center;
    width: 99%;
    line-height: 1.5em;
    font-size: 16px;
    font-weight: 300;
    align-self: center;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .heading-para {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .para {
      width: 60%;
      align-self: center;
      font-size: 18px;
    }
    .flex-container p {
      width: 60%;
      line-height: 1.5em;
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .heading-para {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .para {
      width: 60%;
      align-self: center;
      font-size: 18px;
    }
    .flex-container p {
      width: 60%;
      line-height: 1.5em;
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 0%;
    .heading-para {
      text-align: left;
      padding-top: 3em;
    }
    .heading2 {
      margin-left: 10%;
      font-weight: 300;
      color: hsl(233, 26%, 24%);
      width: 50%;
    }
    .para {
      color: hsl(233, 8%, 62%);
      margin-left: 10%;
      width: 40%;
      line-height: 1.5em;
      font-size: 16px;
      font-weight: 300;
    }
    .flex-container {
      flex-direction: row;
      justify-content: space-around;
      margin-left: 10%;
      margin-right: 5%;
    }
    .flex-div {
      margin-right: 3%;
    }
    .flex-div img {
      width: 30%;
      margin: 0em;
      margin-bottom: 1em;
      align-self: flex-start;
      object-fit: cover;
    }
    .flex-div h3 {
      font-weight: 300;
      align-self: flex-start;
      color: hsl(233, 26%, 24%);
    }
    .flex-div p {
      color: hsl(233, 8%, 62%);
      text-align: left;
      width: 100%;
      line-height: 1.5em;
      font-size: 16px;
      font-weight: 300;
      align-self: flex-start;
    }
  }
`

const SecondSection = () => {
  return (
    <Container>
      <div className="heading-para">
        <h2 className="heading2">Why choose Easybank?</h2>
        <p className="para">
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>
      </div>
      <div className="flex-container">
        <div className="flex-div">
          <img
            src={onlineBanking}
            alt=" hand holding two money notes"
            title="online banking"
            className="icon-image"
          ></img>
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of your finances wherever
            you are in the world.
          </p>
        </div>
        <div className="flex-div">
          <img src={budget} alt="icon of a phone with dollar sign" title="budgeting"></img>
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications when you’re close to
            hitting your limits.
          </p>
        </div>
        <div className="flex-div">
          <img src={onboard} alt="icon of three people and a wheel" title="onboarding"></img>
          <h3> Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start taking control of
            your finances right away.
          </p>
        </div>
        <div className="flex-div">
          <img src={api} alt="icon of square with branches" title="open api"></img>
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one account. Tracking your
            money has never been easier.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default SecondSection
