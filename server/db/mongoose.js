import { connect, set } from "mongoose";

set("strictQuery", false);

connect(
  "mongodb+srv://Bash:S0eqlCZJ2k8itSft@cluster0.0nzxfm0.mongodb.net/Musicon",
  (error, mongoConnection) => {
    if (error) {
      throw new Error("MongoDB connection error: " + error);
    }
    const { host, port, name } = mongoConnection;
    console.log({ host, port, name });
  }
);
