import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>K&E</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1 className="title">Erik + Katie + Morgan</h1> */}
      <main className="main">
        <figure className="shout-out">
          <div className="row" id="row-1">
            <span className="img-text" id="1">We're</span>
          </div>
          <div className="row" id="row-2">
            <span className="img-text" id="2">Gettin'</span>
          </div>
          <div className="row" id="row-3">
            <span className="img-text" id="3">Married!</span>
          </div>
        </figure>
      </main>

      <style jsx>{`
        .title {
          text-align: center;
          font-family: sans-serif;
          font-size: 200px;
        }
        .main {
          display: flex;
          justify-content: center;
        }
        .shout-out {
          margin: 0;
          display: flex;
          flex-direction: column;
          height: 979px;
          width: 734px;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ), url('/ErikKatieMorgan.jpg');
          background-repeat: no-repeat;
          background-size: auto;
          color: white;
          font-family: sans-serif;
          font-weight: bold;
        }
        .row {
          display: flex;
          align-items: center;
          flex-grow: 1;
          text-align: center;
        }
        #row-1 {
          font-size: 90px;
          align-self: flex-end;
          transform: translateX(-100px);
        }
        #row-2 {
          font-size: 90px;
          align-self: center;
          transform: translateX(-68px) rotate(-45deg);
        }
        #row-3 {
          font-size: 120px;
          align-self: flex-end;
          transform: translate(-80px, 110px);
        }
        .img-text {

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
