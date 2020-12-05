import	React from 'react'
import "./Login.css"
import { auth,provider } from "./firebase.js"

function Login() 
    {

        const sign_in=()=>{
            auth.signInWithPopup(provider).catch(
                (error)=>{
                    alert(error.message);
                })

        }
        
        return (
            <div className="login">
                {/* <h1>LOG IN TO DISCORD</h1> */}
                <div className="login_logo">
                    <img src="https://www.freepnglogos.com/uploads/discord-logo-png/masgter-martin-gatzka-deviantart-7.png" height="400" width="500" alt ="discord logo"/>
                </div>
                <button onClick={sign_in}>SIGN IN </button>
             </div>)
    }
export default Login