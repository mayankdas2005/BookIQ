import React from 'react'
import logo from "../assets/logo2.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { axiosInstance } from '../lib/axios.js'
import Alert from '@mui/material/Alert';


const Signup = () => {

  const [formData, setFormData] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      setLoading(true)
      const res = await axiosInstance.post("/api/auth/signup",formData)
      console.log(res)
      setSubmitted(true)
      setLoading(false)
      setError(false)
    }
    catch(error){
      setLoading(false)
      setSubmitted(true)
      setError(true)
      console.log(error)
    }

  }
  


  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-4 bg-gray-40'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-2xl shadow-indigo-200'>
          <div className='flex justify-center mb-6'>
            <Link to="/">
              <img src={logo} alt="Logo" className='h-10' />
            </Link>
            
          </div>
          <h2 className='text-center font-semibold text-2xl mb-6 '>
            Create your account
          </h2>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Username</label>
              <input type="username" 
                    id='username' 
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={handleChange}/>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Email</label>
              <input type="email" 
                      id='email' 
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onChange={handleChange} />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Password</label>
              <input type="password" 
                     id='password' 
                     className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     onChange={handleChange} />
            </div>
            <button type="submit" className="w-full mt-1 py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">{loading?"Loading...":"Sign Up"}</button>
          </form>
          {submitted && (!error? (<Alert severity='success'>Account created succesfully</Alert>):(<Alert severity="error">Error occured</Alert>))}
      </div>
    </div>
  )
}

export default Signup
