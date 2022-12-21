import {connect, set} from "mongoose";

set("strictQuery", false);
console.log(process.env.CLUSTER_NAME);
connect(
   `mongodb+srv://${process.env.CLUSTER_NAME}:${process.env.CLUSTER_PASS}@cluster0.0nzxfm0.mongodb.net/Musicon`,
   (error, mongoConnection) => {
      if (error) {
         throw new Error("MongoDB connection error: " + error);
      }
      const {host, port, name} = mongoConnection;
      console.log({host, port, name});
   }
);
