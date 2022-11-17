import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert'

function Login() {
    const [email, setemail]=useState('')
    const [password, setpassword]=useState('')
    function process(e){
        e.preventDefault()
        if(email === 'admin@admin.com' && password === '123456'){
            swal('Login Successfull', 'Welcome back Mr Zinari', 'success')
        } else {
            swal('Opps we hit a snag','Invalid Login details', 'error')
        }
    }
    return <div className='justify-contents'>
        <p className='h2 mb-3'>Please Login to get started</p>
        <form onSubmit={process} autoComplete='off'>
            <div className="mb-3">
                <input type="email" placeholder='email' required className="form-control" value={email} onChange={(e) =>setemail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder='Password' required className="form-control" value={password} onChange={(e) =>setpassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button> 
        </form>
    </div>
}

export default Login