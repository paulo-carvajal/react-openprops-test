import * as React from 'react';
import { FaBeer } from 'react-icons/fa';
import { TiSpanner } from 'react-icons/ti';

import './style.css';

function Banner() {
  return (
    <div className="banner">
      I'm a banner!
      <span>
        <TiSpanner />
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="fluid-gap">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button>
        A button <FaBeer />{' '}
      </button>

      <Banner />
    </div>
  );
}
