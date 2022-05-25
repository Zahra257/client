import React, { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'
import  Axios from 'axios'
import "./../styles/auth.css"

const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"

class UserInput {
    constructor( email = "", password = "") {
       
        this.email = email
        this.password = password
    }
}


function Login() {

    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML =
            `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])

    // state user input
    const [userInput, setUserInput] = useState(new UserInput())
    // state error msg 
    const [errorMsg, setErrorMsg] = useState("")


    let handleChangeInput = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]:e.target.value
        })
    }
    console.log(userInput.email)
    let handleSubmitLogin = (e) => {
        //disable the refresh after submit 
        e.preventDefault()
        //validate data 
        // let errorMsg =(validateRegisterData(userInput))
        // setErrorMsg(validateRegisterData(userInput))
        //send data & get response from the server
    if(errorMsg=="") 
    
        Axios.post(`http://localhost:9000/api/Login/${userInput.email}/pass/${userInput.password}`,userInput)
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
else {
    setErrorMsg(errorMsg)
}
}            


    

    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square" ></i></span>
                            <span><i className="fab fa-google-plus-square" ></i></span>
                            <span><i className="fab fa-twitter-square" ></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitLogin}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fas fa-user" ></i></span>
                                </div>
                                <input type="text" className="form-control"

                                 placeholder="email" onFocus={() => setErrorMsg("")}
                                 onChange={handleChangeInput}  
                                 name="email"/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key" ></i></span>
                                </div>
                                <input type="password" 
                                className="form-control" placeholder="password" 
                                onFocus={() => setErrorMsg("")}
                                onChange={handleChangeInput}                                  
                                name="password"
                                />
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login" className="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account ? <Link to="/signup"><a>Sign Up</a></Link>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="/forgetpass">
                                <a>Forgot your password?</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login