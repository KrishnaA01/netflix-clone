import React from "react";
import Card from "./Card/Card";
import "./Section.css";
import Slider from "react-slick";



export default function Section({ title, data, content }) {
  // let title = "Action Movies";
  console.log(title, data);
  return (
    <section className="Section">
      <h4>{title}</h4>
     <Slider slidesToShow={3} slidesToscroll={3}>

        {data?.map((currentValue)=>
        (

          <Card  content = {content} key={currentValue.id} movie={currentValue} />
        )
          
        )}
        
        </Slider>
    </section>
  );
}
