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
        <h2 className="subtitle">What I Am:</h2>
        <ul className="content">
          <li>A person interested in many different fields</li>
        </ul>
        <h2 className="subtitle">Where I&apos;ve Been:</h2>
        <ul className="content">
          <li>Software Engineer</li>
          <li>Developer Advocate</li>
          <li>Runway Model</li>
          <li>Music Producer</li>
          <li>Consultant</li>
        </ul>
        <h2 className="subtitle">How Can I Help You?</h2>
        <ul className="content">
          <li>Educational Content</li>
          <li>Demos and Blog Posts</li>
          <li>Live Talks</li>
          <li>Web Apps</li>
          <li>Web Sites</li>
          <li>Project Management</li>
          <li>Mobile Apps</li>
        </ul>
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
