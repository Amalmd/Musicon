import React from "react";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Api} from "../api/Api";
import validator from "validator";
export default function Register() {
   const [register, setRegister] = useState({
      username: "",
      password: "",
   });
   const [validEmail, setValidEmail] = useState(null);
   const navigate = useNavigate();
   const pass = useRef();
   const repPass = useRef();

   const registerHandler = async (e) => {
      e.preventDefault();
      try {
         if (!validator.isEmail(register.username))
            throw new Error("Please Insert Valid Email");
         if (
            repPass.current.value.length > 0 &&
            pass.current.value.length > 0
         ) {
            if (pass.current.value === repPass.current.value) {
               await Api.post("/register", register);
               localStorage.setItem("userValues", register.username);
               navigate("/");
            }
         } else {
            throw new Error("Please Insert Matched Passwords");
         }
      } catch (err) {
         localStorage.removeItem("userValues");
         console.log(err);
         setValidEmail(err.message);
      }
   };

   return (
      <form className="vh-100" style={{backgroundColor: "#252525"}}>
         <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
               <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div
                     className="card shadow-2-strong"
                     style={{borderRadius: "1rem"}}
                  >
                     <div className="card-body p-5 text-center">
                        <h3 className="mb-5">Register</h3>

                        <div className="form-outline mb-4">
                           <input
                              type="email"
                              required
                              value={register.username}
                              id="typeEmailX-2"
                              onChange={(e) => {
                                 setValidEmail(null);
                                 setRegister((prev) => {
                                    return {...prev, username: e.target.value};
                                 });
                              }}
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
                              onChange={(e) => {
                                 setValidEmail(null);
                                 setRegister((prev) => {
                                    return {...prev, password: e.target.value};
                                 });
                              }}
                              id="typePasswordX-2"
                              className="form-control form-control-lg"
                           />
                           <label
                              className="form-label"
                              htmlFor="typePasswordX-2"
                           >
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
                           <label
                              className="form-label"
                              htmlFor="typePasswordX-2"
                           >
                              Repeat password
                           </label>
                        </div>
                        <div>
                           <button
                              onClick={registerHandler}
                              className="btn btn-primary btn-lg btn-block"
                              type="submit"
                           >
                              Register
                           </button>
                        </div>
                        <label style={{color: "brown"}}>{validEmail}</label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </form>
   );
}
