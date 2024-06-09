import React from 'react';
import '../css/hero.css';

export const Hero = () => {
  return (
    <div className="hero-section">
            <div className="overlay">
                <h1>WHERE TALENT MEETS OPPORTUNITY</h1>
                <div className="buttons">
                    <a href="/signup" className="btn">Sign Up for Free</a>
                    <a href="/hire" className="btn">Hire Actors / Models from Us</a>
                </div>
            </div>
        </div>
  )
}
export default Hero