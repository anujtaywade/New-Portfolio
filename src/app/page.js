import React from 'react'
import { MapPin , Github ,Linkedin ,Twitter , Instagram  } from "lucide-react";
import Link from 'next/link';

const page = () => {
  return (
    <div className='min-h-screen ml-40 mt-20  '>
      <h1 className='bg-gray-800 inline-block text-white rounded-3xl p-1'>
        .available for freelancing
      </h1>

      <div>
        <h1 className='text-4xl'>
        Hii, I'm Anuj
      </h1>
      <br />
      <h2 className='text-3xl'>
        Full Stack developer
      </h2>
      
      <img className='h-80  w-80' src="\shibu coding.jpeg" alt="" />
      <p>
        I’m a Full Stack Developer with a passion for building dynamic, efficient, and user-friendly web applications. I enjoy turning ideas into fully functional products from elegant frontends to powerful backends using modern technologies and clean code.
      </p>

      <div>
        <MapPin /> 
        <p>
          Maharashtra, India
        </p>
      </div>
      Downlaod CV 
      </div>

      <div>
      
          <div>
            <Link 
            href = "https://github.com/anujtaywade"
            target = "_blank">
            <Github  /> 
            </Link>

            <Link 
            href = "https://www.linkedin.com/in/anuj-taywade-326881270/"
            target = "_blank">
            <Linkedin  /> 
            </Link>

            <Link 
            href = "https://x.com/Anujjj69"
            target = "_blank">
            <Twitter  /> 
            </Link>

            <Link 
            href = "https://www.instagram.com/anuj_taywade07/"
            target = "_blank">
            <Instagram  /> 
            </Link>
          </div>
        
      </div>
    </div>
  )
}

export default page
