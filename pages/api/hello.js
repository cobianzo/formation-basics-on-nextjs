// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3001/api/hello
export default function handler(req, res) {
  // this is run on the server
  console.log("REQUEST: ", req.url);
  res.setHeader("Set-Cookie", "Areyouserious=1");
  // and now, now, we send it to the frontend, the response.
  res.status(201).json({ name: "John Doe" });
}
