import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';

// if (module.hot) {
//   module.hot.accept();
// }

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: '' };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please allow geolocation!" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
