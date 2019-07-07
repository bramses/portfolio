import React from 'react';
import '../components/smoothScroll';
import hboLogo from '../images/hbo-logo.png';
import urLogo from '../images/ur-logo.png';
import algoliaLogo from '../images/algolia-logo.png';
import NavBar from '../components/navBar';
import OrgLogo from '../components/orgLogo';


const About = () => (
  <section id="about" className="hero is-fullheight is-primary is-bold">
    <div className="hero-head">
      <NavBar to="#about" displayName="About" />
    </div>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">About Me</h1>
        <p>
        I’m Joma, I make videos on YouTube for people who want to get into the tech industry.nnel
        </p>
      </div>
    </div>
    <div className="hero-foot">
      <div className="container">
        <h1 className="title">Organizations I&apos;ve worked with:</h1>
        <nav className="level">
          <OrgLogo to="https://www.hbo.com/" alt="HBO Logo" imgSrc={hboLogo} />
          <OrgLogo to="https://www.algolia.com/" alt="Algolia Logo" imgSrc={algoliaLogo} />
          <OrgLogo to="https://www.rochester.edu/" alt="University of Rochester Logo" imgSrc={urLogo} />
        </nav>
      </div>
    </div>
  </section>
);

export default About;
