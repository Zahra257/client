import  Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

import "./../styles/auth.css"

const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"


class UserInput {
    constructor(firstname = "", lastname = "", email = "", password = "", rPassword = "") {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.password = password
        this.rPassword = rPassword
    }
}


function Register() {
    // let navigate = useNavigate();

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


    //handle change inputs
    let handleChangeInput = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]:e.target.value
        })
    }



    //handle submit register 
    let handleSubmitRegister = (e) => {
        //disable the refresh after submit 
        e.preventDefault()
        //validate data 
        // let errorMsg =(validateRegisterData(userInput))
        // setErrorMsg(validateRegisterData(userInput))
        //send data & get response from the server
    if(errorMsg=="") 
    
        Axios.post('http://localhost:9000/api/auth/register',userInput)
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
            
            
      else {
    setErrorMsg(errorMsg)
}        
 //    navigate('/Login')

    }

    //validate data 

    let validateRegisterData = (newUser = new UserInput()) => {

        //firstname
        let firstnamePattern = /^.{4,12}$/
        if (!firstnamePattern.test(newUser.firstname)) {
            return "Firstname Should be at least 4 characters & maximum 12 😅"
        }
        //lastname
        let lastnamePattern = /^.{4,12}$/
        if (!lastnamePattern.test(newUser.lastname)) {
            return "lastname Should be at least 4 characters & maximum 12 😅"

        }
        //username
        let emailPattern = /^.{4,30}$/
        if (!emailPattern.test(newUser.email)) {
            return "email Should be at least 4 characters & maximum 30 😅"

        }
        //password
        
        let passwordPattern = /^(?=.[0-9])(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/
        if (
            !passwordPattern.test(newUser.password)
        
        ) {
            return "Password Should be at least 8 characters & maximum 12 and contains at least one number one uppercase and lowercase😅"
        }
        //rpassword and password should be much 
        if (newUser.password !== newUser.rPassword) return "The Repeated Password should match the Password "

        return ""
    }

    return (
        <div className="container m-5">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign Up</h3>

                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square" ></i></span>
                            <span><i className="fab fa-google-plus-square" ></i></span>
                            <span><i className="fab fa-twitter-square" ></i></span>
                        </div>

                    </div>
                    <div className="card-body">
                        {/* ERROR MSG PART  */}
                        <div className={errorMsg == "" ? "d-none" : "alert alert-danger"}>
                            {errorMsg}
                        </div>
                        {/* FORM PART  */}
                        <form onSubmit={handleSubmitRegister}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className={errorMsg.includes("firstname") == "" ? "fas fa-user" : "fas fa-user text-danger"}>
                                        </i>
                                    </span>
                                </div>
                                <input
                                    onFocus={() => setErrorMsg("")}
                                    onChange={handleChangeInput}
                                    name="firstname"
                                    type="text"
                                    className="form-control"
                                    placeholder="firstname"
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className={errorMsg.includes("lastname") == "" ? "fas fa-user" : "fas fa-user text-danger"}></i>
                                    </span>
                                </div>
                                <input onFocus={() => setErrorMsg("")}
                                    onChange={handleChangeInput}
                                    name="lastname" type="text"
                                    className="form-control"
                                    placeholder="lastname" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className={errorMsg.includes("email") == "" ? "fas fa-at" : "fas fa-at text-danger"} ></i>
                                    </span>
                                </div>
                                <input onFocus={() => setErrorMsg("")}
                                    onChange={handleChangeInput} name="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="email" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className={errorMsg.includes("Password") == "" ? "fas fa-key" : "fas fa-key text-danger"} ></i></span>
                                </div>
                                <input
                                    onFocus={() => setErrorMsg("")}
                                    onChange={handleChangeInput}
                                    name="password"
                                    type="password"
                                    className="form-control" placeholder="Password" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className={errorMsg.includes("Repeated Password") == "" ? "fas fa-key" : "fas fa-key text-danger"}></i></span>
                                </div>
                                <input
                                    onFocus={() => setErrorMsg("")}
                                    onChange={handleChangeInput}
                                    name="rPassword"
                                    type="password"
                                    className="form-control" placeholder="Confirm Password" />
                            </div>
                            <div className="form-group">
                                <input
                                    onFocus={() => setErrorMsg("")}
                                    type="submit"
                                    value="Register"
                                    className="btn float-right login_btn"
                                     />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Already have an account ? <Link to="/Login">   Sign In </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register













// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import "./../styles/auth.css"

// const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"

// function App() {

//     useEffect(() => {
//         let _headContent = document.querySelector("head").innerHTML

//         document.querySelector("head").innerHTML =
//             `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

//         return () => document.querySelector("head link:first-child").remove()

//     }, [])
//     return (
//         <div className="container">
//             <div className="d-flex justify-content-center h-100">
//                 <div className="card">
//                     <div className="card-header">
//                         <h3>Sign Up</h3>
//                         <div className="d-flex justify-content-end social_icon">
//                             <span><i className="fab fa-facebook-square" ></i></span>
//                             <span><i className="fab fa-google-plus-square" ></i></span>
//                             <span><i className="fab fa-twitter-square" ></i></span>
//                         </div>
//                     </div>
//                     <div className="card-body">
//                         <form>
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text"><i className="fas fa-user" ></i>
//                                     </span>
//                                 </div>
//                                 <input type="text" className="form-control" placeholder="Frstname" />
//                             </div>
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text"><i className="fas fa-user" ></i>
//                                     </span>
//                                 </div>
//                                 <input type="text" className="form-control" placeholder="Lastname" />
//                             </div>
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text">
//                                         <i className="fas fa-at" ></i>
//                                     </span>
//                                 </div>
//                                 <input type="text" className="form-control" placeholder="Email" />
//                             </div>
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text"><i className="fas fa-key" ></i></span>
//                                 </div>
//                                 <input type="password" className="form-control" placeholder="Password" />
//                             </div>
//                             <div className="input-group form-group">
//                                 <div className="input-group-prepend">
//                                     <span className="input-group-text"><i className="fas fa-key" ></i></span>
//                                 </div>
//                                 <input type="password" className="form-control" placeholder="Confirm Password" />
//                             </div>
//                             <div className="form-group">
//                                 <input type="submit" value="Register" className="btn float-right login_btn" />
//                             </div>
//                         </form>
//                     </div>
//                     <div className="card-footer">
//                         <div className="d-flex justify-content-center links">
//                             Already have an account ? <Link to="/">  <a > Sign In</a> </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default App
