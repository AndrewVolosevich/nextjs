import express, { Request, Response } from "express";
import next from "next";
// import sslRedirect from "heroku-ssl-redirect";
import cors from "cors";

const app = next({ dev: true });
const handle = app.getRequestHandler();
const port = 3000;

const allowedOrigins = [
  "capacitor://localhost",
  "http://localhost",
  "http://localhost:3000",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
};

(async () => {
  console.log("hello");
  try {
    await app.prepare();
    const server = express();
    // server.use(sslRedirect());
    server.use(cors(corsOptions));

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.info(`> Ready on localhost:${port} with CORS - env ${"dev"}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
