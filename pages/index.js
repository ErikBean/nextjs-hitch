import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>K&E</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">Erik & Katie & Morgan</h1>
        <figure className="shout-out">
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
      </main>

      <style jsx>{`
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
        .main {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title {
          align-self: center;
          font-family: 'Bubblegum Sans', cursive;
          font-size: 9vw;
          text-align: center;
          margin: 15px;
          -webkit-background-clip: text;
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
        .shout-out {
          display: flex;
          flex-direction: column;
          align-self: center;
          justify-content: space-between;
          height: 126vw;
          width: 95vw;
          max-width: 734px;
          max-height: 979px;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3)
            ),
            url('/ErikKatieMorgan.jpg');
          background-repeat: no-repeat;
          background-size: contain;
          margin: 0 0 200px 0;
          color: white;
          font-family: 'Permanent Marker', cursive;
          border-radius: 10px;
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.55);
        }
        .shout-out:hover {
          transform: perspective(400px) rotateY(-2deg);
          box-shadow: 20px 10px 20px 0 rgba(0, 0, 0, 0.55);
          cursor: pointer;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #eee;
          padding: 0;
          margin: 0;
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
