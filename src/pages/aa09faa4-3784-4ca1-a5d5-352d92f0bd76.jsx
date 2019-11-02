import React from 'react';
import StyledBackgroundSection from '../components/styledBackground';

const LandingPage = () => (
  <StyledBackgroundSection>
    {/* <iframe src={mightyp} type="application/pdf#toolbar=0" title="mightypmkt" style={{ position: "absolute", height: "100%", width: "100%", border: "none" }} /> */}
    <div className="container" style={{ minHeight : "100vh" }}>
      <div className="has-text-white">
        <h1 className="title has-text-white" style={{ fontFamily: 'Permanent Marker' }}>Mighty Professional</h1>
        <h2 className="subtitle has-text-white" style={{ fontFamily: 'Permanent Marker' }}>I make sad rap music</h2>
        <p style={{ fontFamily: 'Staatliches, cursive' }}>I'm inspired by artists like:</p>
        <ul style={{ fontFamily: 'Staatliches, cursive' }}>
          <li>- Childish Gambino</li>
          <li>- Breaking Benjamin</li>
          <li>- Jay IDK</li>
          <li>- 6lack</li>
          <li>- The Weeknd</li>
        </ul>
      </div>
      <div>
        <article className="message is-info">
          <div className="message-header">
            <p>Read about how to make different synth sounds in Serum using Ableton</p>
          </div>
          <div className="message-body">
            Download it free <a href="http://bramses.github.io/2018/03/14/components-of-a-synth/">here</a>!
          </div>
        </article>
        <article className="message is-warning">
          <div className="message-header">
            <p>Check out my soundcloud</p>
          </div>
          <div className="message-body">
            <a href="https://soundcloud.com/user-250346666">Soundcloud</a>
          </div>
        </article>
      </div>
    </div>
    
  </StyledBackgroundSection>
);

export default LandingPage;
