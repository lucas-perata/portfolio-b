import React from 'react'
import CardSkills from '../extras/CardSkills'

function Skills() {
  return (
    <div className="hero h-content">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='text-left flex justify-center flex-row'>
          <div className='flex gap-6 flex-wrap w-1/2 h-content'>
            <h2 className='text-3xl font-bold'>Conocimientos técnicos</h2>
            <div className='flex flex-wrap w-[100vw] max-h-[30vh]  gap-5'>

              <CardSkills link={"/logos/github.svg"} />
              <CardSkills link={"logos/linux.png"} />
              <CardSkills link={"logos/c-.svg"} />
              <CardSkills link={"logos/react.svg"} />
              <CardSkills link={"logos/ts.svg"} />
              <CardSkills link={"logos/post.svg"} />
              <CardSkills link={"logos/swagger.svg"} />

            </div>
            <div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
