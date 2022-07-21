import React  from 'react'
import { SkillBar } from './SkillBar'

export default function Skills() {
    return (
      <div className='skills'>
        <h1>Skills</h1>
        <p className="m-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab quod accusamus facilis similique architecto mollitia dicta beatae ipsum itaque consequuntur, eos pariatur, vitae eius distinctio doloribus harum nesciunt sunt.</p>
        <div className="skills-content row my-5 align-items-center">
        <div className="focus col-md-3 col-12">
          <h2>MY FOCUS</h2>
          <hr />
          <p>Frontend Development</p>
          <p>backend Development</p>
          <p>System Design</p>
          <p>Cloud Solutions</p>
        </div>
        <div className="skills-container offset-md-1 col-md-8 col-12 ">
          <SkillBar name="HTML" level={90}/>
          <SkillBar name="CSS" level={100}/>
          <SkillBar name="JS" level={80}/>
          <SkillBar name="TS" level={60}/>
          <SkillBar name="React" level={70}/>
          <SkillBar name="Node" level={90}/>
          <SkillBar name="SQL" level={60}/>
        </div>
        </div>
      </div>
    )
  }


