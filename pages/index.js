import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(true);
  const flipCard = () => {}; // setIsFlipped(!isFlipped);
  return (
    <div className="container">
      <Head>
        <title>K&E</title>
        <style
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Permanent+Marker&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <h1 className="title">Erik & Katie & Morgan</h1>
      <div className="scene-container">
        <main className="scene" onClick={flipCard}>
          <section className={`card ${isFlipped ? 'is-flipped' : ''}`}>
            <figure className="shout-out card-face card-front">
              <svg viewBox="0 0 56 18">
                <text fill="white" x="0" y="15">
                  We're
                </text>
              </svg>
              <svg viewBox="0 0 56 18">
                <text fill="white" x="0" y="15">
                  Gettin'
                </text>
              </svg>
              <svg viewBox="0 0 70 18">
                <text fill="white" x="0" y="15">
                  Married!
                </text>
              </svg>
            </figure>
            <figure className="card-face card-back">
              <h2 className="date">
                <time dateTime="2021-07-17">7-17-2021</time>
              </h2>
              <ul className="cal-links">
                <li className="cal-link header">Add to:</li>
                <hr />
                <li className="cal-link">
                  <a href="http://www.google.com/calendar/event?action=TEMPLATE&text=Katie%20Erik%20Wedding&dates=20210717T200000Z/20210717T290000Z&details=Event%20Details%20TBD&location=3906%20Lewis%20River%20Rd%2C%20Woodland%2C%20WA%2098674">
                    <img
                      className="gcal-icon"
                      src="/google-calendar-logo.svg"
                      width="30"
                      height="30"
                    ></img>
                    Google Calender
                  </a>
                </li>
              </ul>
            </figure>
          </section>
        </main>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Permanent+Marker&display=swap');
        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 25%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .container {
          height: 100%;
          width: 100%;
          padding: 0 4vw;
        }
        .scene-container {
          height: 100%;
          width: 100%;
          margin: 0;
        }
        .scene {
          display: flex;
          justify-content: center;
          height: 115vh;
          max-height: calc(92vw * 1.34);
          perspective: 200vw;
        }
        .card {
          width: 100%;
          height: 100%;
          max-width: 734px;
          max-height: 979px;
          position: relative;
          transition: transform 1s;
          transform-style: preserve-3d;
        }
        .card.is-flipped {
          transform: rotateY(180deg);
        }
        .card-face {
          position: absolute;
          height: 100%;
          width: 100%;
          margin: 0;
          backface-visibility: hidden;
          border-radius: 10px;
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.55);
        }
        .card-front {
          background: grey;
        }
        .card-back {
          background: lavender;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          font-family: 'Trebuchet MS', Helvetica, sans-serif;
        }
        .shout-out {
          display: flex;
          flex-direction: column;
          align-self: center;
          justify-content: space-between;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3)
            ),
            url('/ErikKatieMorgan.jpg');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          color: white;
          font-family: 'Permanent Marker', cursive;
        }
        .title {
          align-self: center;
          font-family: 'Bubblegum Sans', cursive;
          font-size: 9vw;
          text-align: center;
          margin: 15px;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 800% 800%;
          background-image: repeating-linear-gradient(
            45deg,
            violet,
            indigo,
            blue,
            green,
            yellow,
            orange,
            red,
            violet
          );
          animation: rainbow 8s ease infinite;
        }
        .date {
          display: flex;
          justify-content: center;
          font-size: 48px;
          font-weight: bold;
          padding: 50px 0;
        }
        .cal-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          list-style: none;
          font-size: 28px;
        }
        .cal-link {
          display: block;
          width: 100%;
        }
        .cal-link.header {
          display: block;
          width: 100%;
          font-size: 36px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #eee;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
