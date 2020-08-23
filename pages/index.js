import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>K&E</title>
        <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Permanent+Marker&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">Erik & Katie & Morgan</h1>
        <figure className="shout-out">
          <svg className="svg" viewBox="0 0 56 18">
            <text className="text" fill="white" x="0" y="15">We're</text>
          </svg>
          <svg className="svg" viewBox="0 0 56 18">
            <text className="text" fill="white" x="0" y="15">Gettin'</text>
          </svg>
          <svg className="svg" viewBox="0 0 70 18">
            <text className="text" fill="white" x="0" y="15">Married!</text>
          </svg>
        </figure>
      </main>

      <style jsx>{`
        @keyframes rainbow {
          0% {background-position:0% 50%}
          50% {background-position:100% 25%}
          100% {background-position:0% 50%}
        }
        .main {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title {
          align-self: center;
          font-family: 'Bubblegum Sans', cursive;
          font-size: 5em;
          text-align: center;
          margin: 15px;
          -webkit-background-clip: text;
          color:transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 800% 800%;

          background-image: repeating-linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red, violet);
          animation: rainbow 8s ease infinite;
        }
        .shout-out {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-self: center;
          justify-content: space-between;
          height: 133vw;
          width: 100vw;
          max-width: 737px;
          max-height: 979px;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ), url('/ErikKatieMorgan.jpg');
          background-repeat: no-repeat;
          background-size: contain;
          color: white;
          font-family: 'Permanent Marker', cursive;;
          border-radius: 30px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: rgb(36,36,36);
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
