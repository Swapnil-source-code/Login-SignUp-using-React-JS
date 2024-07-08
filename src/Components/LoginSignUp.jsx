import "./LoginSignUp-style.css"

import user_icon from '../assets/images/person.png'
import email_icon from '../assets/images/email.png'
import password_icon from '../assets/images/password.png'
import { useState } from "react"

const LoginSignUp = () => {

  const [action, setAction] = useState("Login");

  return (
    <>
      <div className="container">
        <div className="login-section">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <form>
            <div className="inputs">
              {action==="Login" ? <div></div> :  <div className="input">
                <img src={user_icon} alt="" />
                <input type="text"  placeholder="Name"/>
              </div>}
            
              <div className="input">
                <img src={email_icon} alt="" />
                <input type="eamil"  placeholder="E-mail Id"/>
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input type="password"  placeholder="Password"/>
              </div>
            </div>
            {action=== "Sign Up" ? <div></div> : <div className="forget-password">Forget Password ? <span>Click Here !</span></div>  }
            
            <div className="submit-container">
              <button className={action==="Login" ? "submit gray" : "submit"} onClick={()=>setAction("Sign Up")}>Sign Up</button>
              <button className={action==="Sign Up" ? "submit gray" : "submit"} onClick={()=>setAction("Login")}>Login</button>
            </div>
          </form>   
        </div>
      </div>
    </>
  )
}

export default LoginSignUp