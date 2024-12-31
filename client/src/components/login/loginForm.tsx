import React, {useState} from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.tsx";

export default function LoginForm() {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  });
  const {login, error, isLoading} = useLogin()

  const HandleFormChange = (e) => {
    const {value, name} = e.target;

    setFormState(prevState => {
      const newState = {...prevState,
        [name]: value
      }

      return newState
    })
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    await login(formState.username, formState.password)
  }

  const incorrectStyle = {
    border: "solid 2px #f93d5d"
  }

  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="username">Username</label>
            <input 
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => HandleFormChange(e)}
              className="form-control"
              style={error === "Incorrect username" ? incorrectStyle : {border: ""}}
            >
            </input>
          <label htmlFor="password">Password</label>
            <input
              type="text" 
              name="password"
              placeholder="password"
              onChange={(e) => HandleFormChange(e)}
              className="form-control"
              style={error === "Incorrect password" ? incorrectStyle : {border: ""}}
            >
            </input>
          <button disabled={isLoading} type="submit" className="btn btn-success">Login</button>
          {error ?
            <div className="login-error-message">
              <h2>{error}</h2>
            </div> 
          : null}
        </form>
      <span>Dont have an account? <Link to="/signup">Signup</Link></span>
      </div>
    </div>
  )
}