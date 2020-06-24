import React from "react";
import "./App.css";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    console.log('init state');
    this.state = {latitude: null, errMsg: null};
  }

  fetchGeo() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log('updating latitude');
        // latitude = pos.coords.latitude;
        this.setState({latitude: pos.coords.latitude});
      },

      (err) => {
        console.log('updating error');
        this.setState({errMsg: err.message});
      }
    );
  }

  renderContent = () => {
    if (this.state.errMsg && !this.state.latitude) {
      return (
        <div>Error: {this.state.errMsg}</div>
      );
    } else if (!this.state.errMsg && this.state.latitude) {
      return (
        <SeasonDisplay lat={this.state.latitude}/>
      );
    } else {
      return (
        <Spinner message="Please accept location request."/>
      );
    }
  }

  render() {
    console.log('Getting Rendered')
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )

  }

  componentDidMount() {
    console.log('After Mount')
    this.fetchGeo();
  }

  componentDidUpdate(...args) {
    console.dir(args);
    console.log('After Update')
  }

  componentWillUnmount() {
    console.log('Bye!')
  }
}

// export default App;
