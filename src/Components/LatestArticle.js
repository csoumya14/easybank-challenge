import React from 'react'
import styled from 'styled-components'
import currency from '../images/image-currency.jpg'
import restaurant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
import confetti from '../images/image-confetti.jpg'

const Container = styled.div`
  width: 100vw;
  margin-top: -8%;
  background-color: hsl(0, 0%, 98%);

  .heading {
    text-align: center;
    font-weight: 300;
    color: hsl(233, 26%, 24%);
    width: 100%;
    padding-top: 3em;
    margin-bottom: 1em;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: -2%;
    .heading {
      text-align: left;
      font-weight: 300;
      color: hsl(233, 26%, 24%);
      width: 100%;
      padding-top: 3em;
      margin-bottom: 1em;
      margin-left: 10%;
    }
    .flex-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 9%;
      margin-right: 7%;
    }
  }
`
const Card = styled.div`
  width: 85vw;
  margin-bottom: 2rem;
  align-self: center;
  background-color: hsl(0, 0%, 100%);
  border-radius: 4px;
  text-align: left;
  img {
    width: 100%;
    height: 30vh;
    maximum-width: 100%;
    border-radius: 6px;
    object-fit: cover;
  }
  address {
    font-size: 12px;
    font-weight: 300;
    margin-left: 1.6em;
    margin-top: 2em;
    color: hsl(233, 8%, 62%);
    font-style: normal;
  }
  h4 {
    font-weight: 300;
    font-size: 18px;
    margin-left: 1em;
  }
  p {
    font-weight: 300;
    color: hsl(233, 8%, 62%);
    font-size: 14px;
    width: 90%;
    margin-left: 1em;
    padding-bottom: 3em;
    line-height: 1.5em;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    img {
      height: 60vh;
    }
    h4 {
      margin-left: 1.5em;
    }
    p {
      font-size: 16px;
      margin-left: 1.5em;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    h4 {
      margin-left: 1.5em;
    }

    p {
      font-size: 16px;
      margin-left: 1.5em;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    width: 20vw;
    align-self: flex-start;
    img {
      width: 100%;
      height: 25vh;
      maximum-width: 100%;
      border-radius: 6px;
      object-fit: cover;
    }
  }
`

const ThirdSection = () => {
  return (
    <Container>
      <h2 className="heading">Latest Articles</h2>
      <div className="flex-container">
        <Card>
          <img src={currency} alt="lots of currency notes not in order" title="currency"></img>
          <address className="author">By Claire Robinson</address>
          <h4> Receive money in any currency with no fees</h4>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why should you be forced
            to only receive money in a single …
          </p>
        </Card>
        <Card>
          <img
            src={restaurant}
            alt="table with glasses, forks, food items and plates containing food"
            title="restaurant table"
          ></img>
          <address className="author">By Wilson Hutton</address>
          <h4> Treat yourself without worrying about money</h4>
          <p>
            Our simple budgeting feature allows you to separate out your spending and set realistic
            limits each month. That means you …
          </p>
        </Card>
        <Card>
          <img
            src={plane}
            alt="wing of a plane on the sky with sun shining and clouds floating"
            title="plane-wing"
          ></img>
          <address className="author">By Wilson Hutton</address>
          <h4>Take your Easybank card wherever you go</h4>
          <p>
            We want you to enjoy your travels. This is why we don’t charge any fees on purchases
            while you’re abroad. We’ll even show you …{' '}
          </p>
        </Card>
        <Card>
          <img
            src={confetti}
            alt="bits of colors falling down in a blue background"
            title="confetti"
          ></img>
          <address className="author">By Claire Robinson</address>
          <h4>Our invite-only Beta accounts are now live!</h4>
          <p>
            After a lot of hard work by the whole team, we’re excited to launch our closed beta.
            It’s easy to request an invite through the site ...
          </p>
        </Card>
      </div>
    </Container>
  )
}

export default ThirdSection
