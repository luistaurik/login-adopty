import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./assets/components/Header";
import Form from "./assets/components/Form";
import Login from "./assets/components/Login";

function App() {

  const socialLinks = [
    {
        name: "Facebook",
        fontid: "fa-facebook",
    },
    {
      name: "Github",
      fontid: "fa-github",

  },
  {
    name: "Facebook",
    fontid: "fa-linkedin", 
}
]

  return (
    <>
    <Header></Header>
    <Login></Login>
    <Form></Form>
    </>
  )
}

export default App
