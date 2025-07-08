require("dotenv").config();

const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3003;

const MONGODB_URI =
  ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

module.exports = { MONGODB_URI, PORT };