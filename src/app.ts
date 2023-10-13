import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import v1Router from "./routes/apiRouter";

const app: Express = express();

// Middleware
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json request bodies
app.use(cors()); // enable cors
app.use(helmet()); // helmet for added security
app.use(compression()); // compression to reduce response body size

// API routers
//v1
app.use("/api/v1", v1Router);

export default app;
