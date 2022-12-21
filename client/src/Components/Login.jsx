import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const checklogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:5000/login", login);
      setIsLoggedIn(true);
      console.log(data);
      localStorage.setItem("userValues", login.username);
      setLogin({
        username: "",
        password: "",
      });
      navigate("/homepage");
    } catch {
      localStorage.removeItem("userValues");
      console.log("error");
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={login.username}
                    id="typeEmailX-2"
                    onChange={(e) =>
                      setLogin((prev) => {
                        return { ...prev, username: e.target.value };
                      })
                    }
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    value={login.password}
                    onChange={(e) =>
                      setLogin((prev) => {
                        return { ...prev, password: e.target.value };
                      })
                    }
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                </div>
                <button
                  onClick={checklogin}
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
