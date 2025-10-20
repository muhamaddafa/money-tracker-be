import app from "../src/app";

export default async function handler(req, res) {
  try {
    const response = await app.handle(req);
    const body = await response.text();

    // Set HTTP status dan headers dari Elysia response
    res.status(response.status);
    response.headers.forEach((value, key) => res.setHeader(key, value));

    res.send(body);
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).send("Internal Server Error");
  }
}
