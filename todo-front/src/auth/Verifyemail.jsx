import  Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

import "./../styles/auth.css"

const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"


class UserInput {
    constructor(email = "" ,Token =  "" ) {
        this.email = email
        this.Token = Token
    }
}


function Verifyemail() {
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
    let handleSubmit = (e) => {
        //disable the refresh after submit 
        e.preventDefault()
        //validate data 
        // let errorMsg =(validateRegisterData(userInput))
        // setErrorMsg(validateRegisterData(userInput))
        //send data & get response from the server
    if(errorMsg=="") 
    
        Axios.post(`http://localhost:9000/api/verify-email/${userInput.email}/Token/${userInput.Token}`,userInput)
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
                        <h3>verify email</h3>

                       

                
                    <div className="card-body">
                        {/* ERROR MSG PART  */}
                        <div className={errorMsg == "" ? "d-none" : "alert alert-danger"}>
                            {errorMsg}
                        </div>
                        {/* FORM PART  */}
                        <form onSubmit={handleSubmit}>
                            
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
                                        <i className={errorMsg.includes("Repeated Password") == "" ? "fas fa-key" : "fas fa-key text-danger"}></i></span>
                                </div>
                                <input
                                    onFocus={() => setErrorMsg("")}
                                    onChange={handleChangeInput}
                                    name="Token"
                                    type="Token"
                                    className="form-control" placeholder="Token" />
                            </div>

                            <div className="form-group">
                                <input
                                    onFocus={() => setErrorMsg("")}
                                    type="submit"
                                    value="verify"
                                    className="btn float-right login_btn"
                                     />
                            </div>
                        </form>
                    </div>
                  
                </div>
            </div>
        </div>

    )
}

export default Verifyemail

