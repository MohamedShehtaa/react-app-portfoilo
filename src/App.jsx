import React, { Component } from 'react'
import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Portolio from './components/Portolio';
import Footer from './components/Footer';



export default class App extends Component {

  componentDidMount() {
    console.log("App did mount")
  }

  state = {
    name: "mohamed shehta",
    age: 26
  }

  render() {
    return (
      <>
        <Hero />
        <Bio />
        <Skills />
        <Portolio />
        <Footer />
      </>
    )
  }
}


