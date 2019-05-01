import * as React from 'react';

export enum ButtonState {
  Invisible,
  Visible,
}

const initialState = {
  style: {
    width: 100,
    height: 100,
    backgroundColor: '#3F51B5',
    color: 'rgba(255,255,255,.87)',
    border: 'none',
    borderRadius: 20,
    fontSize: 48,
  },
  number: 0,
  buttonState: ButtonState.Invisible,
  uri: '',
  text: ButtonState.Invisible.toString(),
};
type State = Readonly<typeof initialState>;

export class Button extends React.Component<NestedPartial<State>, State> {

  constructor(props: NestedPartial<State>) {
    super(props);
    this.state = { ...initialState, ...props } as State;
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((prevState: State) => {
      const state = prevState.buttonState ^ 1;
      return { buttonState: state, text: state.toString() };
    });
  }

  render() {
    return (
      <>
        <button style={this.state.style} onClick={this.onClick}>
          {this.state.text}
        </button>
        <div>
          {this.state.buttonState == ButtonState.Visible && <div>Visible</div>}
          {this.state.buttonState == ButtonState.Invisible && <div>Invisible</div>}
        </div>
      </>
    );
  }
}

type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer R> ? Array<NestedPartial<R>> : NestedPartial<T[K]>
};
