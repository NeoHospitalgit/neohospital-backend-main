require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// all routes import here
const authRoute = require("./router/auth-router");
const Service = require("./router/service-router");
const ContactForm = require("./router/contactForm-router");
const HomeDoctors = require("./router/homeDoctors-router");
const CareerForm = require("./router/careerForm-router");
const specialitiesRouter = require("./router/category-router");
const doctorsRoute = require("./router/doctors-router");
const blogsRoute = require("./router/blogs-router");
const headerRoute = require("./router/header-router");
const KeywordPage = require("./router/seopages-router");
const adminRoute = require("./router/admin-router");
const ServiceCat = require("./router/service-category-router");
const formRoutes = require('./router/formRoutes');
const Testimonials = require("./router/testimonials-router");
// Database connection
const connectDb = require("./utils/db");
// error mideware for error solving 
const errorMiddleware = require("./middlewares/error-middleware");
const path = require("path");
const bodyParser = require("body-parser");

// corsOption start
const API_URL = "https://www.neohospital.com";
// const API_URL = "http://localhost:3000";
const corsOptions = {
  origin: [API_URL],

  origin: (origin, callback) => {
    const allowedOrigins = [API_URL];

    const isAllowed = allowedOrigins.includes(origin);
    callback(null, isAllowed);
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

const corsOptionsExtended = {
  origin: [API_URL],

  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptionsExtended));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, HEAD, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Expose-Headers",
    "X-Custom-Header, Authorization"
  );
  next();
});

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/api/auth", authRoute);

// my routes
app.use("/api/adminv1", specialitiesRouter);
app.use("/api/adminv2", doctorsRoute);
app.use("/api/adminv3", blogsRoute);
app.use("/api/adminv4", headerRoute);
app.use("/api/adminv5", ServiceCat);
app.use("/api/adminv6", Service);
app.use("/api/adminv7", HomeDoctors);
app.use("/api/adminv8", KeywordPage);
app.use("/api/adminv9", Testimonials);
app.use("/api/careermail", CareerForm);
app.use("/api/contactmail", ContactForm);
app.use('/api/sendmails', formRoutes);

// my routes

// let's define admin routed
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5001;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
    console.log("API_URL", API_URL);
  });
});
