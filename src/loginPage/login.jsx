import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';



const Login = () => {

  const navigate = useNavigate()
  // const history = useHistory();

  const value = {
    username: 'test@gmail.com',
    Password: 'test@123'
  }

  const [logindata, setLoginData] = useState({
    username: '',
    Password: ''
  })


  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setLoginData({
      ...logindata,
      [e.target.name]: e.target.value

    })
  }
  

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (value.username === logindata.username && value.Password === logindata.Password) {

    await  localStorage.setItem("islogin", JSON.stringify(logindata))
      
        navigate('/dashboard')
 
      // navigate('../Navbar')
      // alert("login successful")
      // history.push('/dashboard')
    }
    else {
      alert("wrong crediantials")
    }
  }


  return (
    <>
      <section className='login-section d-flex align-items-center justify-content-center h-100'>
        <div className="container">
          <div className="row justify-content-center w-100">
            <div className="col-12 col-lg-6">
              <div>
                <div className='common-card'>
                  <h3 className='m-0 lh-1 fw-bold text-center mb-4'>Login</h3>
                  <form action="" onSubmit={handleSubmit} className='w-100 login-form-wrapper'>
                    <div className='mb-3'>
                      <label htmlFor="user" className='mb-1'>User name</label><br />
                      <input type="text" placeholder='enter user-name' id='user' name='username' value={logindata.username} onChange={handleInputChange} className='w-100 rounded-2 bg-transparent px-3 py-2' />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='pass' className='mb-1'>Password</label><br />
                      <input type="text" placeholder='enter password' id='pass' name='Password' value={logindata.Password} onChange={handleInputChange} className='w-100 rounded-2 bg-transparent  px-3 py-2' />
                    </div>
                    <div >
                      <button type='submit' className='bg-primary w-100 py-2 border-0 rounded-2 text-light btn-primary'>Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Login
