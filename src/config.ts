const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || "development";
const FRONT_URL = process.env.FRONT_URL || "http://localhost:3000/";

const corsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: FRONT_URL,
  preflightContinue: false,
};

export { PORT, NODE_ENV, corsOptions };
