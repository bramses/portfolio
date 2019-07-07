import React from 'react';
import '../components/smoothScroll';
import NavBar from '../components/navBar';


const Projects = () => (
  <section id="projects" className="hero is-fullheight is-bold is-info">
    <div className="hero-head">
      <NavBar to="#projects" displayName="Projects" />
    </div>
  </section>
);

export default Projects;
