import express from "express";
import membersRouter from "./routes/members.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
// members route
app.use("/members", membersRouter);

// Handle undefined routes
app.use((_, res) => {
  res.status(404).json({ message: "this routes is undefined" });
});
app.listen(port, () => console.log(`server running in port ${port}`));
