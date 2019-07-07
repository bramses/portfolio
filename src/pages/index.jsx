import React, { Component } from 'react';
import Image from '../components/image';
import '../components/smoothScroll';
import About from './about';
import './bulma.scss';
import Blurb from '../components/blurb';


class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      showBlurbBlog: false,
      showBlurbYouTube: false,
    };
  }

  closeBlurb() {
    this.setState({
      showBlurbYouTube: false,
      showBlurbBlog: false,
    });
  }

  openBlurb(blurb) {
    this.closeBlurb();
    this.setState((oldState) => {
      const newState = Object.assign({}, oldState);
      newState[`showBlurb${blurb}`] = true;
      return newState;
    });
  }


  render() {
    const { showBlurbBlog, showBlurbYouTube } = this.state;
    return (
      <div>
        <section id="home" className="hero is-fullheight is-light is-bold">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item" href="/">
                    <h1 className="title">Bram Adams</h1>
                  </a>
                </div>
                <div className="navbar-menu">
                  <div className="navbar-end">
                    <a href="#about" className="navbar-item">
                      About
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h1 className="title">Hi, I&apos;m Bram.</h1>
                  <h2 className="subtitle">
I like
                    {' '}
                    <span style={{ textDecoration: 'underline' }} tabIndex={0} role="textbox" onKeyPress={() => this.openBlurb('Blog')} onClick={() => this.openBlurb('Blog')}>writing</span>
, coding,
                    {' '}
                    <span style={{ textDecoration: 'underline' }} tabIndex={0} role="textbox" onKeyPress={() => this.openBlurb('YouTube')} onClick={() => this.openBlurb('YouTube')}>making videos</span>
, acting, and giving talks.
                  </h2>
                  { showBlurbBlog && <Blurb link="https://usrbinblog.com/" onClick={() => this.closeBlurb('Blog')} header="/usr/bin/blog/" body="is a tech blog where I discuss tech, personal finance, and personal development, with occasional smatterings of etc." /> }
                  { showBlurbYouTube && <Blurb link="https://www.youtube.com/channel/UCPkoAWQ1lFJ53kI61Kt7p-g" onClick={() => this.closeBlurb('YouTube')} header="The Important Bits" body="is a channel focused on curiousity and rapid acquisition of skills using the Pareto Principle to find where input has outsized impact." /> }
                </div>
                <div className="column">
                  <figure className="image">
                    <Image />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              For all buisness inquires, contact:
              {' '}
              <strong>paretobits @ gmail . com</strong>
            </p>
            <p>
              <span><a href="https://www.linkedin.com/in/brammadams/">LinkedIn</a></span>
              {' '}
|
              {' '}
              <span><a href="https://www.youtube.com/channel/UCPkoAWQ1lFJ53kI61Kt7p-g">YouTube</a></span>
              {' '}
|
              {' '}
              <span><a href="https://github.com/bramses">GitHub</a></span>
              {' '}
|
              {' '}
              <span><a href="https://usrbinblog.com/">Blog</a></span>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default IndexPage;