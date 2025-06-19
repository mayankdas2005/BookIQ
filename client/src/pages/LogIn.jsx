import React from 'react'
import logo from "../assets/logo2.png"
import googleLogo from "../assets/icons8-google-logo.svg"
import githubLogo from "../assets/icons8-github.svg"


const Login = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-md'>
        <div className="flex justify-center mb-6">
          <img src={logo} className="h-8" alt="Logo" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-6">
            Sign in to your account
        </h2>
        <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
        </form>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 mt-4" />
            <span className="mt-4 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="mt-4 text-sm text-indigo-600 hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Sign in</button>
        <div className="flex items-center justify-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-2 text-gray-500 text-sm">Or continue with</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center justify-center w-1/2 border border-gray-300 rounded py-2 hover:bg-gray-50">
            <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center w-1/2 border border-gray-300 rounded py-2 hover:bg-gray-50">
            <img src={githubLogo} alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
            Not a member? <a href="#" className="text-indigo-600 hover:underline">Start a 14 day free trial</a>
        </p>




      </div>
    </div>
  )
}

export default Login  





/*<div className='min-h-full flex flex-col justify-center px-6 py-12'>
      <div className='mx-auto w-full max-w-sm'>
        <img src={logo} alt="Company Logo" className='h-9 mx-auto w-auto' />
        <h1 className=" mt-8 text-center font-bold text-2xl tracking-tight text-gray-900">Log in to your account</h1>
      </div>
      <div className='mt-10 mx-auto w-full max-w-sm '>
          <form action="#" className = "space-y-6 " method='POST'>
            <div>
              <label htmlFor="email" className='block text-sm text-gray-900 font-medium' >Email Address</label>
              <div className='mt-2'>
                <input type="text" id='email'  className='rounded-md bg-white px-3.5 w-full py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300  placeholder:text-gray-400  focus:outline-2  focus:-outline-offset-2  focus:outline-indigo-600'/>
              </div>
              <div className='flex justify-between items-center'>
                <label htmlFor="password" className=' mt-4 block text-sm text-gray-900 font-medium' >Password</label>
                <a href="#" className='mt-4 block text-sm font-semibold text-indigo-600 hover:text-indigo-500'>Forgot Password?</a>
              </div>
              <div className='mt-2'>
                 <input type="text" id='password' className='rounded-md bg-white px-3.5 w-full py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300  placeholder:text-gray-400  focus:outline-2  focus:-outline-offset-2  focus:outline-indigo-600'/>
              </div>
            </div>
            <div>
              <button type='submit' className='w-full flex text-center justify-center bg-indigo-600 rounded-md text-white px-3 py-1.5 font-semibold shadow-xs hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Submit</button>
            </div>
          </form>
      </div>
    </div>*/