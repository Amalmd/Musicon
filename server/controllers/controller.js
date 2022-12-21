import passport from "passport";
import { User } from "../model/user.model.js";

export const createUser = (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log("error");
        res.send(err);
      } else {
        passport.authenticate("local")(req, res, function () {
          res.send("ok");
        });
      }
    }
  );
};

export const login = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(user);
  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.status(200).send(user);
      });
    }
  });
};
