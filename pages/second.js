import Head from "next/head";
import React from "react";
/** Example for getStaticProps in a static page
 *
 * We need to think on the eventual situation of:
 * a page not being visited for a long time (low amount of visits)
 * Data will be old for the new visit.
 */

/**
 * Pages are created ahead time AND refreshed every x seconds, after a request.
 */
export function getStaticProps(context) {
  // there is no context.req nor context.res.

  // DB calls, fetch etc. without being cors binded.
  /**
   *  await fetch ...
   *
   */
  const thePageInfo = (Math.random() * 100).toFixed(0) + 4;

  // creates the static page with build time data.
  return {
    props: {
      myvar: thePageInfo,
    },
    // revalidate works only in production. use npm run build & npm run start to see the production version.
    revalidate: 5, // after 5 seconds of a page requests, it TRIES TO BUILD THE PAGE AGAIN.
  };
}

// localhost:3000/second
function second(props) {
  return (
    <div className="container">
      <Head>
        <title>Tutorial</title>
        <meta
          name="description"
          content="From https://www.youtube.com/watch?v=EJVGzyWSCBE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="alert alert-primary mt-5">
          <h1>We are showing the getStaticProps with revalidation</h1>
          <p>The page Info {props.myvar}</p>
        </div>
      </main>
    </div>
  );
}

export default second;
