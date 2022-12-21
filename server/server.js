import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import "./db/mongoose.js";
import { User } from "./model/user.model.js";
import { createUser, login } from "./controllers/controller.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen("4000", function () {
  console.log("server started on port 4000 ...");
});
