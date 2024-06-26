export const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://bee-jee-xi.vercel.app",
    "https://bee-jee-client.vercel.app",
    "http://bee-jee-xi.vercel.app",
    "http://bee-jee-client.vercel.app"
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization"
  ],
  credentials: true,
  optionSuccessStatus: 200
};
