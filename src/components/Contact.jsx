import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex min-h-[70vh] min-w-full items-center justify-center'>
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in Touch</span>
        </h1>

        <p className="text-center text-lg font-semibold text-gray-500">
          Want to chat? Send me an Email and I'll get back to you.
        </p>

        <a href="" className="text-nowrap text-white rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">ogomidedaramola@gmail.com</a>
      </div>
    </div>
  )
}

export default Contact