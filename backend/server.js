require("dotenv").config();
const connectDB = require("./config/db");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const swaggerSpec = require("./docs/swagger");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(helmet());
// app.use(cors({origin: process.env.FRONTEND_URL,credentials: true}));
app.use(cors());
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