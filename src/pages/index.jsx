import React, { Component } from 'react';
import Image from '../components/image';
import '../components/smoothScroll';
import About from './about';
import './bulma.scss';
import Blurb from '../components/blurb';
import SiteHeroHeader from '../components/heroHead';

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      showBlurbBlog: true,
      showBlurbYouTube: false,
      showBlurbStream: false,
      showBlurbInstagram: false
    };
  }

  closeBlurb() {
    this.setState({
      showBlurbYouTube: false,
      showBlurbBlog: false,
      showBlurbStream: false,
      showBlurbInstagram: false
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
    const { showBlurbBlog, showBlurbYouTube, showBlurbInstagram } = this.state;
    return (
      <div>
        <section id="home" className="hero is-fullheight is-light is-bold">
          <SiteHeroHeader />
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h1 className="title">Hi, I&apos;m Bram.</h1>
                  <h2 className="subtitle">
                    I like
                    {' '}
                    <span
                      style={{ textDecoration: 'underline', color: 'blue' }}
                      tabIndex={0}
                      role="textbox"
                      onKeyPress={() => this.openBlurb('Blog')}
                      onClick={() => this.openBlurb('Blog')}
                    >
                      writing
                    </span>
                    {', '}
                    <span
                      style={{ textDecoration: 'underline', color: 'blue' }}
                      tabIndex={0}
                      role="textbox"
                      onKeyPress={() => this.openBlurb('Instagram')}
                      onClick={() => this.openBlurb('Instagram')}
                    >
                      creative coding,
                    </span>
                    {' '}
                    <span
                      style={{ textDecoration: 'underline', color: 'blue' }}
                      tabIndex={0}
                      role="textbox"
                      onKeyPress={() => this.openBlurb('YouTube')}
                      onClick={() => this.openBlurb('YouTube')}
                    >
                      making videos
                    </span>
                    {' '}
                    {/* <span style={{ textDecoration: 'underline', color: 'blue' }}
                    tabIndex={0} role="textbox"
                  onKeyPress={() => this.openBlurb('Stream')}
                  onClick={() => this.openBlurb('Stream')}>DJing</span> */}
                    , giving talks, and reading.
                  </h2>

                  {showBlurbBlog && (
                    <Blurb
                      link="https://usrbinblog.com/"
                      onClick={() => this.closeBlurb('Blog')}
                      header="/usr/bin/blog/"
                      body="A blog where I discuss optimization, in tech and life."
                    />
                  )}
                  {showBlurbYouTube && (
                    <Blurb
                      link="https://www.youtube.com/channel/UCPkoAWQ1lFJ53kI61Kt7p-g"
                      onClick={() => this.closeBlurb('YouTube')}
                      header="Bram Adams"
                      body="A self-titled channel focused on creative coding. And interviews with people who are experts in multiple fields. And memes."
                    />
                  )}
                  {showBlurbInstagram && (
                    <Blurb
                      link="https://www.instagram.com/_bramses/"
                      onClick={() => this.closeBlurb('YouTube')}
                      header="@_bramses"
                      body="A portfolio (random collection, honestly) of creative code experiments I've built."
                    />
                  )}
                  {/* { showBlurbStream && <Blurb link="https://github.com/bramses/tidal" onClick={() => this.closeBlurb('Stream')} header="EMP" body="is a Mixer stream where I live code DJ using TidalCycles and TidalVim. The music is EDM and highly improvisational in nature." /> } */}
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
        <footer className="footer" id="footer">
          <div className="content has-text-centered">
            <p>
              For all business inquires, contact:
              {' '}
              <strong>paretobits@gmail.com</strong>
              <br />
              <em>thanks for stoppin by</em>
            </p>
            <p>
              <span>
                <a href="https://www.linkedin.com/in/brammadams/">linkedin</a>
              </span>
              {' '}
              |
              {' '}
              <span>
                <a href="https://www.youtube.com/channel/UCPkoAWQ1lFJ53kI61Kt7p-g">youtube</a>
              </span>
              {' '}
              |
              {' '}
              <span>
                <a href="https://github.com/bramses">github</a>
              </span>
              {' '}
              |
              {' '}
              <span>
                <a href="https://usrbinblog.com/">blog</a>
              </span>
              {' '}
              |
              {' '}
              <span>
                <a href="https://www.instagram.com/_bramses/">instagram</a>
              </span>
              {' '}
              |
              {' '}
              <span>
                <a href="https://twitter.com/adams_bram">twitter</a>
              </span>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default IndexPage;
