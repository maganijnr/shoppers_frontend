import './index.css'
import {useState} from 'react'
const Login = () => {
   const [user, setUser] = useState({
      email:"",
      password:"",
   })

   return (
      <div className="login-body">
         <div className="login-container">
            <div className="login-left">
               <h2>Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime.</h2>
            </div>
            <div className="login-right">
               <h2 className="login-header">Login Into Your Account</h2>
               <form className='login-form'>
                  <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input 
                        className="form-input"
                        value={user.email}
                        type="email"
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="User Email"
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="password">password</label>
                     <input 
                        className="form-input"
                        value={user.email}
                        type="password"
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="User Password"
                     />
                  </div>
                  <div className="form-btn">
                     <button type="submit" className="btn">Log In</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Login