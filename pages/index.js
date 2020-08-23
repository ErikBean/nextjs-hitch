import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Katie + Erik</h1>
        <figure className="shout-out">
          <h2>We're Getting Married!</h2>
          <img src="https://lh3.googleusercontent.com/Z-vZ58ZFoEhK8VyvhGhvDSOwfllHNtNF9AgE22eyzceIAaAy6RA2F8bd-udJK91cdvWpP1tHqEJrqLyTQMPksTck_8oiJaZOB2e4A78T2Sfdm9y-jnpuf6_1bacf8vBwT5JsMa9_r18" />
        </figure>
      </main>

      <style jsx>{`
        .title {
          text-align: center;
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
