
import Heading from "../Heading"
import Options from "./Options"
import Container from "./Container";
import { useState } from "react";
const Features = () => {
    const [index,setIndex]=useState(1);
function changeIndex(id){
        setIndex(id)
        
    }
    
  return (
    <section className="features mb-700">
        <div className="container">
        <Heading heading='Features' txt='Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.'/>
        <Options  index={index} setIndex={setIndex} changeIndex={changeIndex} />
        <Container index={index} />
        </div>
    </section>
  )
}

export default Features