import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import "./db/mongoose.js";
import {createUser, login} from "./controllers/controller.js";
import {scrapeFromYoutube} from "./youtubeScraper.js";
import * as url from 'url';
import path from 'path';
const __dirname = url.fileURLToPath(new URL('./', import.meta.url));
const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const publicPath = path.join(__dirname,'build');
app.use(express.static(publicPath));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(
   session({
      secret: "outlittlesecret",
      resave: false,
      saveUninitialized: false,
   })
);
app.use(passport.initialize());
app.use(passport.session());

app.post("/register", createUser);

app.post("/login", login);

app.get("/", function (req, res) {
   res.send("home");
});

app.get("/register", function (req, res) {
   res.render("register");
});

app.get("/logout", function (req, res, next) {
   req.logout(function (err) {
      if (err) {
         return next(err);
      }
   });
   res.send("logging out");
});

app.post("/searchVideo", async (req, res) => {
   const getData = await scrapeFromYoutube(req.body.convertedText);
   res.status(200).send(getData);
});
console.log(__dirname);
app.get('*', (req, res) => {
   console.log(__dirname);
   res.sendFile(path.resolve(__dirname, 'build','index.html'));
 });

app.listen(PORT, function () {
   console.log(`server started on port ${PORT} ...`);
});
