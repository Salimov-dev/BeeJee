export const corsOptions = {
  origin: ["http://localhost:5173", "https://beejee-salimov.netlify.app/"],
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
