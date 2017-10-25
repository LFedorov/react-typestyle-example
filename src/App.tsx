import * as React from 'react';
import { style, classes } from 'typestyle';

const appClass = style({
  textAlign: 'center',
});

const headerClass = style({
  backgroundColor: '#222',
  height: '150px',
  padding: '20px',
  color: 'white',
});

const introClass = style({
  fontSize: 'large',
});

const redTextClass = style({
  color: 'red',
  $nest: {
    '&:hover': {
      color: 'green'
    }
  }
});

const secondIntroClass = classes(introClass, redTextClass);

class App extends React.Component {
  render() {
    return (
      <div className={appClass}>
        <div className={headerClass}>
          <h2>Welcome to React</h2>
        </div>
        <p className={introClass}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className={secondIntroClass}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
