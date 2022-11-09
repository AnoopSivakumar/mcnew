import React from 'react'
import {BiMicrochip} from "react-icons/bi"
import {FaEdit} from "react-icons/fa"
import {BiCommentError} from "react-icons/bi"
export const Gallery = () => {
    const techs = [
        // {
        //   id: 1,
         
        //   title: "HTML",
        //   style: "shadow-orange-500",
        // },
        // {
        //   id: 2,
        
        //   title: "CSS",
        //   style: "shadow-blue-500",
        // },
        // {
        //   id: 3,
          
        //   title: "JavaScript",
        //   style: "shadow-yellow-500",
        // },
        // {
        //   id: 4,
          
        //   title: "React",
        //   style: "shadow-blue-600",
        // },
        // {
        //   id: 5,
         
        //   title: "Next JS",
        //   style: "shadow-white",
        // },
        {
          id: 6,
          child: (
            <>
               <BiMicrochip size={80} />
            </>
          ),
          title: "Tech",
          stitle: "Get New Tech News",
          style: "shadow-sky-400",
        },
        {
          id: 7,
          child: (
            <>
               <BiCommentError size={80} />
            </>
          ),
          title: "Tips",
          stitle: "Computer And Mobile Tips And Tricks",
          style: "shadow-pink-400",
        },
        {
          id: 8,
          child: (
            <>
               <FaEdit size={70} />
            </>
          ),
          title: "Tutorials",
          stitle: "Photo And Video Editing Tutorials",
          style: "shadow-gray-400",
        },
      ];
  return (
    <div
    name="services"
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
  >
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
         Our Services
        </p>
        <p className="py-6">What We Do</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
        {techs.map(({ id,child, title,stitle, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            {/* <img src={child} alt="" className="w-20 mx-auto" /> */}
            <div className="w-20 mx-auto items-center text-center">

            {child}
            </div>
            <p className="mt-4 font-bold text-4xl">{title}</p>
            <p className="mt-4">{stitle}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
