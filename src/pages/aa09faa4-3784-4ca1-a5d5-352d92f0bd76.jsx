import React from 'react';
import mightyp from '../images/mighty-pro-mt.pdf';

const LandingPage = () => (
  <div>
    <iframe src={mightyp} type="application/pdf#toolbar=0" title="mightypmkt" style={{ position: "absolute", height: "100%", width: "100%", border: "none" }} />
  </div>
);

export default LandingPage;
