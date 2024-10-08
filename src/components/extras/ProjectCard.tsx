import React from 'react'
import { FaGithub } from "react-icons/fa";
import "../../components/landing/landing.css"

function ProjectCard({ side, title }) {
  return (
    <div className={'w-[60vw] gap-5 flex justify-between  ' + (side === true ? "flex-col xl:flex-row-reverse" : "flex-col xl:flex-row")}>
      <div className={'gap-5 self-center  flex flex-col ' + (side === true ? "text-right" : "text-left")}>
        <h3 className='text-2xl font-bold text-second'>{title}</h3>
        <p className='xl:max-w-[40vw] bg-indigo-800 p-4 rounded-lg shadow-lg'>Más descripciones de los proyectos largas descripciones de los proyectos Descripción descripción descripción de palabras Descripción descripción descripción de palabras</p>
        <p className='text-second'>.NET 8.0 - PostgreSQL - Next.JS</p>
        <FaGithub size={24} className={'' + (side === true ? "self-end" : "self-start")} />
      </div>
      <div className="mockup-browser bg-gray-800 border-gray-800 shadow-xl">
        <div className="mockup-browser-toolbar text-gray-400">
          <div className="input">https://daisyui.com</div>
        </div>
        <div className="bg-gray-800 flex justify-center px-4 p-1">
          <img alt="proyecto-img" src='homer.gif' className="rounded-xl" />
        </div>
      </div>
    </div>

  )
}

export default ProjectCard
