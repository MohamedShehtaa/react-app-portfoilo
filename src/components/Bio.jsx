import React, { Component } from 'react'

export class Bio extends Component {

  downloadPDF(){

  }

  render() {
    return (
      <div className="container about">
        <div 
        className="row h-100 align-items-center">
          <div className="col-4">
            <h1>
              About Me
            </h1>
          </div>
          <div className="col-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum autem necessitatibus corporis molestias quia similique maxime nemo. Labore quos natus accusamus quaerat! Inventore et omnis voluptates sunt, harum repellat.
          </div>
          <div className="row">
            
          <button  >
            <a href="./resume.pdf">Download Resume</a> 
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio