import React from 'react';
import aboutImg from "../images/singapore-zoo-2.webp";
import Title from './Title';

export default function About() {
  return (
<section className="section" id="about">
    <Title title="about" subTitle="us"/>
    <div className="section-center about-center">
        <div className="about-img">
            <img src={aboutImg} alt="awesome zoo" className="about-photo"/>
        </div>
        <article className="about-info">
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sit ullam reprehenderit!
            </p>
            <a href="#home" className="btn">read more</a>
        </article>
    </div>
</section>
  )
}
