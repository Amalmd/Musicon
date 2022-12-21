import axios from "axios";
import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ userValues, setUserValues, setIsLoggedIn }) {
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const pass = useRef();
  const repPass = useRef();
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      if (pass.current.value === repPass.current.value) {
        await axios.post("http://localhost:4000/register", register);
        setIsLoggedIn(true);
        localStorage.setItem("userValues", register.username);
        navigate("/homepage");
      }
    } catch {
      localStorage.removeItem("userValues");
      console.log("error");
    }
  };
  return (
    <form className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Register</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    required
                    value={register.username}
                    id="typeEmailX-2"
                    onChange={(e) =>
                      setRegister((prev) => {
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
                    ref={pass}
                    type="password"
                    required
                    value={register.password}
                    onChange={(e) =>
                      setRegister((prev) => {
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
                <div className="form-outline mb-4">
                  <input
                    ref={repPass}
                    type="password"
                    required
                    id="typePasswordX-3"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Repeat password
                  </label>
                </div>
                <button
                  onClick={registerHandler}
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
