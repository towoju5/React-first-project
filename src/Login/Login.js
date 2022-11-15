import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Login() {
    const [email, setemail]=useState('')
    const [password, setpassword]=useState('')
    function process(e){
        e.preventDefault()
    }
    return <div className='justify-contents'>
        <p>Please Login to get started</p>
        <form onSubmit={process} autoComplete='off'>
            <div className="mb-3">
                <input type="email" placeholder='email' required className="form-control" value={email} onChange={(e) =>setemail(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder='Password' required className="form-control" value={password} onChange={(e) =>setpassword(e.target.value)}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button> 
        </form>
    </div>
}

export default Login