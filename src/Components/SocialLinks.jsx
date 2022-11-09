import React from 'react'
import { AiFillYoutube,AiFillInstagram,AiFillTwitterSquare } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
const SocialLinks = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
              Twitter <AiFillTwitterSquare size={30} />
            </>
          ),
          href: "https://twitter.com/anoopsivakumar7",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              Instagram <AiFillInstagram size={30} />
            </>
          ),
          href: "https://instagram.com/magiccoverzz",
        },
        {
          id: 3,
          child: (
            <>
              Youtube <AiFillYoutube size={30} />
            </>
          ),
          href: "https://www.youtube.com/@MagicCoverzzTechAndTips",
        },
        {
          id: 4,
          child: (
            <>
              Mail <HiOutlineMail size={30} />
            </>
          ),
          href: "magiccoverzz@gmail.com",
        },
        {
          id: 5,
          child: (
            <>
               Personal IG <AiFillInstagram size={30} />
            </>
          ),
          href: "https://instagram.com/anoopsivakumar10",
        },
      ];
  return (
    <div>
        <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>  
    </div>
  )
}

export default SocialLinks