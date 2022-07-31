// Showing the preview mode functionality.

// In this case create our own api endpoint /api/enable-preview.
// It will set two cookies that will enable the preview mode.
// The preview mode is meant to make the production enviroment to work like dev environment.
//  This means, in dev env the getStaticProps is execture on very page load, wihtout watigin for the revalidation.

export default function handler(req, res) {
  res.setPreviewData({}); // set cokkies, _next_preview_data, with a JWT token. That makes the next page to load in dev mode.

  res.status(200).json({ name: "John Doe" });
}
