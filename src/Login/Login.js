import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function process(e) {
    e.preventDefault();

    // firstly disable login button on click
    var $loginBtn = document.getElementById('loginBtn')
    $loginBtn.setAttribute('disabled', true)


    var formdata = new FormData();
    formdata.append("email", "iamtowoju@yahoo.com");
    formdata.append("password", "adedayo201");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://app.zinari.org/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status == "success") {
          swal("Login Successfull", "Welcome back "+result.data.name, "success");
        } else {
          swal("Opps we hit a snag", "Invalid Login details", "error");
        }
        $loginBtn.setAttribute('disabled', false)
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <div className="justify-contents">
      <p className="h2 mb-3">Please Login to get started</p>
      <form onSubmit={process} autoComplete="off">
        <div className="mb-3">
          <input
            type="email"
            placeholder="email"
            required
            className="form-control"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" id="loginBtn" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
