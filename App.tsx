import * as React from 'react';
import { FaBeer } from 'react-icons/fa';
import { TiSpanner, TiSpiral } from 'react-icons/ti';

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
      <h1>Hello World!</h1>
      <p>Using Open Props and React Icons:</p>
      <TiSpiral className="icon-spiral" />
      <button>
        A button <FaBeer />{' '}
      </button>

      <Banner />
    </div>
  );
}
