import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [names, setNames] = useState(['Katie', 'Erik', 'Morgan']);
  const flipCard = () => setIsFlipped(!isFlipped);
  const changePlaces = () => setNames(names.slice(1).concat(names[0]));
  const stopClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
  };
  return (
    <div className="container">
      <Head>
        <title>K&E</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <h1 className="title" onClick={changePlaces}>
        {names.join(' & ')}
      </h1>
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
              <img
                className="cal-image"
                width="40%"
                src="/calendar-medium.png"
              />
              <div className="map-icon">
                <div className="icon-row"></div>
                <a
                  className="map-link"
                  href="https://www.google.com/maps/place/Adeline+Farms/@45.9411384,-122.6311182,17z/data=!3m1!4b1!4m5!3m4!1s0x54944820e5432fcf:0xa59ec443b531507e!8m2!3d45.9411384!4d-122.6289295"
                >
                  <img
                    className="map-img"
                    alt="google-maps-link"
                    src="/tilt-map.png"
                  />
                  <address className="addy-box" onClick={stopClick}>
                    <span className="addy">Adeline Farms</span>
                    <span className="addy">3906 Lewis River Rd,</span>
                    <span className="addy">Woodland, WA 98674</span>
                  </address>
                </a>
              </div>
              <ul className="cal-links" onClick={stopClick}>
                <li className="cal-link header">Add to:</li>
                <li className="cal-link">
                  <a
                    className="link-item"
                    href="http://www.google.com/calendar/event?action=TEMPLATE&text=Katie%20Erik%20Wedding&dates=20210717T200000Z/20210717T290000Z&details=Event%20Details%20TBD&location=3906%20Lewis%20River%20Rd%2C%20Woodland%2C%20WA%2098674"
                  >
                    Google Calendar
                  </a>
                </li>
              </ul>
            </figure>
          </section>
        </main>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Permanent+Marker&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        @font-face {
          font-family: 'Magic Trick';
          src: url('/magic.woff') format('woff');
        }

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
        .title {
          align-self: center;
          margin: 20px 0;
          font-family: 'Bubblegum Sans', cursive;
          font-size: 9vw;
          text-align: center;
          color: transparent;
          line-height: 1.5;
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
          cursor: pointer;
          background: grey;
        }
        .card-back {
          background: lavender;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          font-family: 'Magic Trick', sans-serif;
          color: #435d89;
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
        .cal-image {
          border-radius: 999px;
          box-shadow: 0px 0px 5px 1px #435d89;
          filter: saturate(2);
        }
        .map-icon {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }
        .map-link {
          display: flex;
          justify-content: space-around;
          padding-top: 15px;
          text-decoration: none;
        }
        .icon-row {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .map-img {
          width: 30%;
          filter: saturate(0.7);
        }
        .addy-box {
          display: flex;
          flex-direction: column;
          font-size: 24px;
        }
        .cal-links {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          list-style: none;
          font-size: 20px;
        }
        @media (min-width: 641px) {
          .addy-box {
            font-size: 48px;
          }
          .cal-links {
            font-size: 36px;
          }
        }
        .link-item {
          text-decoration: none;
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
