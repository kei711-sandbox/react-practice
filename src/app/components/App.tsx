import * as React from 'react';
import { Button } from './Button';

interface Props {
  param1: string,
  param2: string,
  param3: string
}

interface State {
}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <p>param1 {this.props.param1}</p>
        <p>param2 {this.props.param2}</p>
        <p>param3 {this.props.param3}</p>
        <Button/>
      </div>
    );
  }
}