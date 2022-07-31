import Head from "next/head";

// Page example for SSR, getIntitialProps.

/** with this fn, the page works like a PHP page.
 * Executing the backend code (this fn), and building in
 * real time the page before serving it.
 * In EVERY REQUEST this fn is executed and the page rebuilt.
 *
 * This is like our PHP server side processing. REQUEST is context.req, and RESPONSE is context.res
 * Other important context props are:
 *  context.query: the query string of the request, when dynamic is shows the rule /pages/users/[id] .
 */
export function getServerSideProps(context) {
  // this is run in the server, shown in terminal!
  console.log(
    "TODELETE: loading getServerSideProps in Home: " + process.env.MY_TEST_VAR,
    context.req.url,
    process.env.SECRET_VAR
  );

  // here we can use await fetch  or whatever. This is the server so no CORS problems will be found.

  // context.req and context.res
  // You can hijack the request and send your own data to the client.
  /*
  context.res.statusCode = 404; //this is like php's header("HTTP/1.1 404 Not Found");
  context.res.end(); // die();  in PHP
  */

  // send to client:
  // * notFound
  // * redirect
  // * props

  // returns props, or redirect: {}
  return {
    props: {
      name: "world",
    },
  };
}

// This guy is run in Server (SSR) and in client (hydration)
// NextJS provides 3 possible env files:  .env.local, .env.development, .env.production
//  where .env.local will overwrite anyone else, that's why it should be in staging or live.
export default function Home(props) {
  console.log(props);
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

      <main>
        <h1>Welcome</h1>
        <div className="alert alert-primary shadow" role="alert">
          <p>
            A secret var in client side cant be shown. NextJS prevents
            it.process.env.SECRET_VAR is not acessible
          </p>
          <p>This is a public .env.local: {process.env.NEXT_PUBLIC_MYVAR} </p>
          <p>
            right now you are in <b>{process.env.NODE_ENV}</b>, but if you have
            the <i>.env.local</i> file, it will be used instead of
            <i>
              .env.
              {process.env.NODE_ENV}
            </i>
          </p>
        </div>
      </main>
    </div>
  );
}
