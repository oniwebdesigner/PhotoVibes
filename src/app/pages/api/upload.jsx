export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the file upload here, save it to the server or send it to cloud storage.
    res.status(200).json({ message: "File uploaded successfully!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
