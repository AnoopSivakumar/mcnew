import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Services = () => {
  

 

  return (
    <div
    name="gallery"
    className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
         Gallery
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        
      </div>
    </div>
  </div>
  )
}

export default Services
