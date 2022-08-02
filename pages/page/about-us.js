import React from "react";
import Head from "next/head";

import Image from "next/image";

// run once, when building the site with npm run build.
export function getStaticProps(context) {
  return {
    // props are recalculated every x seconds, set on reavlidate, but only in production!
    props: { myvar: (Math.random() * 100).toFixed() },
  };
}

function AboutUs(props) {
  return (
    <div className="container">
      <Head>
        <title>Example Totally Static page, generated in Build time</title>
        <meta
          name="description"
          content="From https://www.youtube.com/watch?v=EJVGzyWSCBE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="alert alert-primary mt-5">
          <h1>This page is generated once, in build time</h1>
          <pre>when we run `npm run build`</pre>

          <p>The page Info {props.myvar}</p>
        </div>
        <div className="alert alert-secondary">
          Now the image. It is super compressed, thanks to the {`<Image>`}{" "}
          component, and lazy loaded if not in the viewport initially
          <br />
          You need to run a node server to use this feature.
          <Image src="/my-img.png" width="1200" height="700" />
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
