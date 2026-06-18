require("dotenv").config();
const connectDB = require("./config/db");
const rateLimit = require("express-rate-limit");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const swaggerSpec = require("./docs/swagger");
const swaggerUi = require("swagger-ui-express");

const app = express();

const globalLimiter = rateLimit({

windowMs:15*60*1000,

max:300,

message:{
success:false,
message:"Too many requests"
},

standardHeaders:true,
legacyHeaders:false

});

app.use(globalLimiter);

// Required for Render / Railway / Heroku
app.set("trust proxy", 1);

app.use(helmet());

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));

app.use("/auth", authRoutes);
app.use("/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Lexora Legal Backend Running");
});

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const startServer = async () => {
  try{
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch(error){
    console.log(error);
    process.exit(1);
  }

};

startServer();