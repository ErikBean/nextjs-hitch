import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => setIsFlipped(!isFlipped);
  return (
    <div className="container">
      <Head>
        <title>K&E</title>
        <style
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Permanent+Marker&display=swap"
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
              <a
                className="calendar-link"
                href="http://www.google.com/calendar/event?action=TEMPLATE&text=Katie%20Erik%20Wedding&dates=20210717T200000Z/20210717T290000Z&details=Event%20Details%20TBD&location=3906%20Lewis%20River%20Rd%2C%20Woodland%2C%20WA%2098674"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
                </svg>
                <p>Add to Calendar</p>
              </a>
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
          align-items: center;
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
          font-family: 'Trebuchet MS', Helvetica, sans-serif;
        }
        .calendar-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #eee;
          padding: 0 !important;
          margin: 0 !important;
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
