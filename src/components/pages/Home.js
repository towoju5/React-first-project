import React from 'react'
import Login from "../../Login/Login";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return( 
        <div className="App d-flex justify-content-center p-5">
            {/* <p className='h1'>Welcome to Homepage</p> */}
            <div className='col-md-4'>
                <Login/>
            </div>
        </div>
    )
}

export default Home