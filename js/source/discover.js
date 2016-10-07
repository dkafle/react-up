import Logo     from './components/Logo';
import Excel    from './components/Excel';
import React    from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div style={ {padding: '20px'} }>
    <h1>Component discover</h1>

    <h2>Logo</h2>
    <div style={ {display:'inline-block', background: 'purple'} }>
      <Logo />
    </div>

    <h2>Excel</h2>
      <div style={ {display:'inline-block', background: 'purple'} }>
        <Excel />
      </div>
  </div>,
  document.getElementById('pad')
);
