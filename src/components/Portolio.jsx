import React  from 'react'
import Card from './Card'

export default function Portolio(){

  const light = "#959188"
  const dark = "#3d3d3d"

    return (
      <>
      <div>
        <div className="portfolio container">
          <h1 className="mt-5">Portfolio</h1>
        </div>
        <div className="cards-container row g-0 justify-content-evenly mx-4" >

          <Card name="Web Design" color={light}/>
          <Card name="Mobile Design" color={dark}/>
          <Card name="Web Development" color={light}/>
          <Card name="Backend Development" color={dark}/>
          <Card name="Database Design" color={light}/>
          <Card name="Frontend Development" color={dark}/>
        </div>
      </div>

      </>
    )
  }


