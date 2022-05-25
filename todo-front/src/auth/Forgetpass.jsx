import React, { useEffect, useState  } from 'react'
import  Axios from 'axios'
import "./../styles/auth.css"
import { Link } from 'react-router-dom'


const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"

class UserInput {
    constructor( email = "") {
        this.email = email
        
    }
}


function Forgetpass() {

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
    let handleSubmit = (e) => {
        //disable the refresh after submit 
        e.preventDefault()
        //validate data 
        // let errorMsg =(validateRegisterData(userInput))
        // setErrorMsg(validateRegisterData(userInput))
        //send data & get response from the server
    if(errorMsg=="") 
  
        Axios.post(`http://localhost:9000/api/forget-password/${userInput.email}`,userInput)
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
                        <h3>Forget  password</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square" ></i></span>
                            <span><i className="fab fa-google-plus-square" ></i></span>
                            <span><i className="fab fa-twitter-square" ></i></span>
                        </div>
                    </div>

                    <div className="card-body">
                    Enter the email associated with your account and we'll send you a link a reset your password.
                        <form onSubmit={handleSubmit}>
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
                           
                           
                            <div className="form-group">
                                <input type="submit" value="Enter" className="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>

    )
}
export default Forgetpass