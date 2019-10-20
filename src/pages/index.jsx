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
    };
  }

  closeBlurb() {
    this.setState({
      showBlurbYouTube: false,
      showBlurbBlog: false,
      showBlurbStream: false,
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
    const { showBlurbBlog, showBlurbYouTube, showBlurbStream } = this.state;
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
                    , creative coding,
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
                      body="is a blog where I discuss optimization, in tech and life."
                    />
                  )}
                  {showBlurbYouTube && (
                    <Blurb
                      link="https://www.youtube.com/channel/UCPkoAWQ1lFJ53kI61Kt7p-g"
                      onClick={() => this.closeBlurb('YouTube')}
                      header="The Important Bits"
                      body="is a YouTube channel focused on allowing you to feel comfortable in conversation about any topic, and a podcast where we get to learn firsthand from experts about how they have learned the skills they have."
                    />
                  )}
                  {/* TODO add TikTok blurb
                  https://m.tiktok.com/h5/share/usr/6719259012707763205.html?language=en&sec_uid=MS4wLjABAAAAq7zH4S6PSwmek9z8gAEZtD7YKQ5Hkdy3DwY4wyT-Vi8kaHUMk-Qoj3WJaSMx8DOX&u_code=d7e11hc0e092gh&utm_campaign=client_share&app=musically&utm_medium=ios&user_id=6719259012707763205&tt_from=copy&utm_source=copy
                  */}
                  {/* TODO decide if inactive projects should be kept as
                   links or if I should narrow in */}
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
