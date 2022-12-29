import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
   return (
      <section className='flex flex-col justify-center max-w-lg mx-auto min-h-screen'>
         <form className='flex flex-col gap-6'>
            <input
               type='text'
               placeholder='name'
               className='text-base py-3 px-4 border-[1.5px] w-full border-blue focus:outline-none'
            />
            <input
               type='email'
               placeholder='email'
               className='text-base py-3 px-4 border-[1.5px] w-full border-blue focus:outline-none'
            />
            <input
               type='password'
               placeholder='password'
               className='text-base py-3 px-4 border-[1.5px] w-full border-blue focus:outline-none'
            />
            <input
               type='password'
               placeholder='confirm password'
               className='text-base py-3 px-4 border-[1.5px] w-full border-blue focus:outline-none'
            />

            <span className='tracking-tight text-gray-500'>register does not work</span>

            <button
               type='submit'
               className='self-start py-2 px-4 text-lg rounded border-[1.5px] border-blue bg-blue text-white'
            >
               Register
            </button>
         </form>

         <p className='tracking-tight text-base py-8'>Already have an account? <Link to='/login' className='text-blue'>login</Link></p>
      </section>
   )
}

export default Register