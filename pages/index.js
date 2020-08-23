import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>K&E</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {/* <h1 className="title">Erik <br/>+<br/> Katie <br/>+<br/> Morgan</h1> */}
        <figure className="shout-out">
          <svg className="svg" viewBox="0 0 56 18">
            <text className="text" fill="white" x="0" y="15">We're</text>
          </svg>
          <svg className="svg" viewBox="0 0 56 18">
            <text className="text" fill="white" x="0" y="15">Gettin</text>
          </svg>
          <svg className="svg" viewBox="0 0 60 18">
            <text className="text" fill="white" x="0" y="15">Married</text>
          </svg>
        </figure>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');
        .main {
          display: flex;
          justify-content: center;
        }
        .shout-out {
          margin: 0;
          display: flex;
          flex-direction: column;
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
          font-family: sans-serif;
          font-weight: bold;
          border-radius: 30px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
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
