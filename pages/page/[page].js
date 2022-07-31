import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

/** BUild time (stored in disk/cdn) */
/**
 * Specify the paths that we build ahead on time. TOTALLY STATIC and created with `npm run build`.
 */
export function getStaticPaths() {
  return {
    paths: [
      { params: { page: "about-us" } }, // HTML + JSON - pages loaded immediately, but immutable.
      { params: { page: "contact" } }, // HTML + JSON
    ],

    // fallback: false, //  /my-page >> returns 404 because it is not in the paths.

    // setting up the 'fallback' to true, it will work like the page `/second`,
    // with the only difference is that the first render is triggered by the first user, not with npm run build.
    // and of course revalidating every x secs.
    // there are 2 options of `fallback` activated:
    // 1
    fallback: true, // fallback into getStaticProps, with flashing the page while the JSON is generated.
    // 2
    // fallback: 'blocking', // avoid flashing, but the FIRST visitor will have a little delay.
  };

  /**
   * A common convention is:
   *  paths: [] // empty
   *  fallback: 'blocking'
   *
   * So the page is generated for the first user,
   * and future user will see the generated one,
   * with revalidation every x seconds.
   *
   */
}

/** fallback function. When the page is not STATIC (/page/about-us, /page/contact), but dynamic (/page/my-page) */
// works the same as /second.js
export function getStaticProps(context) {
  return {
    // props are recalculated every x seconds, set on reavlidate, but only in production!
    props: { myvar: (Math.random() * 100).toFixed() },
    revalidate: 30,
  };
}

function Page(props) {
  const router = useRouter();
  if (router.isFallback) {
    // this is rendered for a second if the page is not set in the static paths.
    return "Loading..."; // the user is requesting a REAL DYNAMIC PAGE, not build ahead time >> go to getStaticProps.

    // right after the getStaticProps generate the json file and the html is rendered.
  }

  // if we get to this point router.isFallback is false.

  console.log("rourer", router);
  return (
    <div className="container">
      <Head>
        <title>getStaticPaths and getStaticProp in Dynamic page</title>
        <meta
          name="description"
          content="From https://www.youtube.com/watch?v=EJVGzyWSCBE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="alert alert-primary mt-5">
          <h1>We are showing the dynamic [page] with revalidation</h1>
          <pre>Page slug {router.asPath}</pre>
          <p>
            fallback is set to <i>true</i> so you will see a flash saying
            'Loading...' whenever the page is created.
          </p>
          <p>The page Info {props.myvar}</p>
        </div>
        <div className="alert alert-secondary">
          <p>
            <b>Note:</b> use /page/mypage/api/enable-preview in production to
            make it behave like in development, so you force the page to
            revalidate even if the interval time is not completed
          </p>
        </div>
      </main>
    </div>
  );
}

export default Page;
