import express from "express";

const app = express();
const port = 3000;

// Handle undefined routes
app.use((_, res) => {
  res.status(404).json({ message: "this routes is undefined" });
});
app.listen(port, () => console.log(`server running in port ${port}`));
