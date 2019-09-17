import React from 'react';
import '../components/smoothScroll';
import hboLogo from '../images/hbo-logo.png';
import urLogo from '../images/ur-logo.png';
import algoliaLogo from '../images/algolia-logo.png';
import NavBar from '../components/navBar';
import OrgLogo from '../components/orgLogo';
import modelPhoto from '../images/model.jpg';
import fwbkLogo from '../images/fwbk.png';
import mlhLogo from '../images/Major_League_Hacking_logo.png';


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
          <li>
            <a style={{ textDecoration: 'underline' }} href={modelPhoto}>
Runway Model
            </a>
          </li>
        </ul>
        <h2 className="subtitle">How Can I Help You?</h2>
        <ul className="content">
          <li><a style={{ textDecoration: 'underline' }} href="https://usrbinblog.com/2019/02/27/lexical-scoping-and-improv/">Educational Content</a></li>
          <li>
            <a style={{ textDecoration: 'underline' }} href="https://www.youtube.com/watch?v=VSkXyuXzwlc">Video Demos</a>
            {' '}
and
            {' '}
            <a style={{ textDecoration: 'underline' }} href="https://blog.algolia.com/vue-instantsearch-v2/">Blog Posts</a>
          </li>
          <li><a style={{ textDecoration: 'underline' }} href="https://www.youtube.com/watch?v=rbnneSpFp3I">Live Talks</a></li>
          <li><a style={{ textDecoration: 'underline' }} href="https://quirky-pasteur-183694.netlify.com/">Web Apps</a></li>
          <li>Web Sites (Wordpress, Squarespace, JAMStack, Custom)</li>
          <li>Project Management</li>
          <li>Mobile Apps</li>
          <li>Positioning and Marketing</li>
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
          <OrgLogo to="https://www.fashionweekbrooklyn.com/" alt="Fashion Week Brooklyn" imgSrc={fwbkLogo} />
          <OrgLogo to="https://mlh.io/" alt="MLH" imgStyle={{ marginTop: '15%' }} imgSrc={mlhLogo} />
        </nav>
      </div>
    </div>
  </section>
);

export default About;
