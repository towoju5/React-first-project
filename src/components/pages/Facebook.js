import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Facebook() {
    function LoginForm(e) {
        e.preventDefault();
        swal('Login data submitted successfully', 'Please wait while we login you in', 'info')
    }
    return (
        <div className="facebook d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-6">
                    <div className="Facebooklogo align-baseline">
                        <img style={{marginLeft: '-38px', width:"430px"}} src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook logo" />
                        <p>Connect with friends and the world around you on Facebook.</p>
                    </div>
                </div>
                <div className="col-md-6" style={{paddingLeft: '4rem'}}>
                    <div className="col-md-8">
                        <div className="card" style={{border:'none'}}>
                            <div className="card-body">
                                <form method="POST" onSubmit={LoginForm}>
                                    <div class="mb-3">
                                        <input type="email" required class="form-control form-control-lg" id="email" aria-aria-label="Email or phone number" placeholder="Email or phone number"/>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" required class="form-control form-control-lg" id="email" aria-aria-label="Password" placeholder="Password"/>
                                    </div>
                                    <div class="d-grid gap-2 mb-3">
                                        <button className="btn btn-primary btn-block btn-lg" id="login">Login</button>
                                        <Link to="/facebook" style={{borderBottom: '1px solid #dddfe2', textDecoration:'none'}}>
                                            <p>Forgot Password</p>
                                        </Link>
                                    </div>
                                    <Link to="/register">
                                        <button type="button" className="btn btn-warning btn-lg m-3">Create new account</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Facebook