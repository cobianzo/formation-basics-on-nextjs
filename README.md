Tutorial from https://www.youtube.com/watch?v=EJVGzyWSCBE

## Tutorial for

- local, development and production `env` variables
- index.js: `/` Example of getServerSideProps. like backedn in PHP
- `/second`: Example of `getStatisProps` in static page. revalidate.
- `[page].js`: Example `getStaticProps` in dynamic page.

- `/api/enable-preview`: preview mode (useful, for instance, if you create a CMS and want a preview mode of a post draft)

# Concepts that should be clear with this example:

`getServerSideProps` (for PHP-like pages, generated over and over no matther what)  
`getStaticProps` (for revalidation in static and dynamic)  
`getStaticPaths` (for dynamic paged /[id].js -like. Specifies the static pages -build time generated-, and the fallback for the dynamic ones -generated on first visit and every x revalidate secs-)

`res.setPreviewData({});` to enable preview (also called 'dev') mode.
Dynamic imports: not implemented in this code, but mentioned in the course: it is downloading js files only when needed, instead of bundeling its javascript inside the main.js source file. See package `next/dynamic`

## development env

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
