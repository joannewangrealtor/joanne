// About.js
import React, { useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';


function About() {
  const { content } = useContext(LanguageContext);

  useEffect(() => {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.opacity = '0';
    setTimeout(() => {
      aboutSection.style.transition = 'opacity 1s ease-in';
      aboutSection.style.opacity = '1';
    }, 100);
  }, []);

  const handleScrollToSocial = () => {
    const socialSection = document.getElementById('social');
    if(socialSection){
      socialSection.scrollIntoView({behavior : 'smooth'});
    }
  }

  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="animate-slide-up">{content.about_title}</h2>
            <p className="animate-slide-up">{content.about_p1}</p>
            <p className="animate-slide-up">{content.about_p2}</p>
            <p className="animate-slide-up">{content.about_p3}</p>
            <button className="btn animate-slide-up" onClick={handleScrollToSocial}>{content.about_button}</button>
          </div>
          <div className="about-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/Me1.jpg`}
              alt="Joanne Wang"
              className="animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
