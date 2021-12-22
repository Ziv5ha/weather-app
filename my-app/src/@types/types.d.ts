export declare namespace ReduxTypes {
  interface Action {
    type: string;
    payload: { name: string };
  }
  interface Payload {
    name: string;
  }
  interface State {}
}

export declare namespace Weather {
  interface State {
    weatherReducer: {
      name: string;
      main: { temp: number; temp_min: number; temp_max: number };
      weather: { 0: { main: string; description: string } };
    };
  }
}
