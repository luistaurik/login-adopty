import React, { useState } from "react";

import "./Form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "./Alert";



function Form() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error,setError] = useState(null)
    const [nameError, setNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmEmailError, setConfirmEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const infoChecker = (e) => {
        console.log("This is infochecker")
        e.preventDefault();

        const validEmail = /\S+@\S+\.\S+/;
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

        setError("");
        setNameError("");
        setLastNameError("");
        setEmailError("");
        setConfirmEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        if (name === "") {
            setNameError("Name is empty")
        } 
        if (lastName === "") {
            setLastNameError("Last name is empty")
        }
        if( validEmail.test(email) ){
            setEmailError("");
            } else{
            setEmailError("The email is not valid");
        }
        if (confirmEmail.trim() === "" || email !== confirmEmail) {
            setConfirmEmailError("The emails are not the same");
        }
        if (validPassword.test(password)){
            setPasswordError("");
        } else {
            setPasswordError("You need a better password");
        }
        if (confirmEmail.trim() === "" || password !== confirmPassword) {
            setConfirmPasswordError("The passwords are not the same")
        }
        if (
            !nameError &&
            !lastNameError &&
            !emailError &&
            !confirmEmailError &&
            !passwordError &&
            !confirmPasswordError &&
            name &&
            lastName &&
            email &&
            confirmEmail &&
            password &&
            confirmPassword
            )
        {
          setError("success");
          setName("");
          setLastName("");
          setEmail("");
          setConfirmEmail("");
          setPassword("");
          setConfirmPassword("");
          setNameError("");
          setLastNameError("");
          setEmailError("");
          setConfirmEmailError("");
          setPasswordError("");
          setConfirmPasswordError("");
          setNameError("")
          setLastNameError("")
          setEmailError("")
          setConfirmEmailError("")
          setPasswordError("")
          setConfirmPasswordError("")
          return;
        } else {
          setError("error");
          return;
        }
    }


  return (
    <>
        <form className="form d-flex flex-column justify-content-center align-items-center" onSubmit={infoChecker}>
                <div className="form-group">
                    <input className="input form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    {nameError && <p className="text-danger">{nameError}</p>}
                </div>
                <div className="form-group">
                    <input className="input form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    {lastNameError && <p className="text-danger">{lastNameError}</p>}
                </div>
                <div className="form-group">
                    <input className="input form-control" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    {emailError && <p className="text-danger">{emailError}</p>}
                </div>
                <div className="form-group">
                    <input className="input form-control" type="email" placeholder="Confirm Email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}></input>
                    {confirmEmailError && <p className="text-danger">{confirmEmailError}</p>}
                </div>
                <div className="form-group">
                    <input className="input form-control" placeholder="Password" value={password}onChange={(e) => setPassword(e.target.value)}></input>
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                </div>
                <div className="form-group">
                    <input className="input form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
                </div>
                <button className="btn btn-success submit" type="submit">
                    Create account
                </button>
                {error !== null && (
                <Alert
                error={{
                    message:
                    error === "success"
                        ? "You have been registered"
                        : "You miss one or more fields",
                    color: error === "success" ? "success" : "danger",
                    display: error === "succes" ? "auto" : "auto",
                }}
                />
            )}
        </form>
    </>
  );
}

export default Form;