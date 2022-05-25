import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import Forgetpass from '../auth/Forgetpass'
import Verifyemail from '../auth/Verifyemail'
import Resetpassword from '../auth/Resetpassword'


const routes = () => {
return (
  <>
  {/* syntax jdid dyl router */}
  <BrowserRouter> 
      <Routes>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path='/forgetpass' element={<Forgetpass/>}/>
       <Route path='/verifyemail' element={<Verifyemail/>}/>
       <Route path='/Resetpassword' element={<Resetpassword/>}/>


      </Routes>
    </BrowserRouter>
 




  </>
)
}
export default routes