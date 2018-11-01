import React, { Component } from 'react';
import WeeklyForecast from './WeeklyForecast';
import getWeather from './services/getWeather';
import WeatherContext from './WeatherContext';
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo';

import './App.scss';

// const client = new ApolloClient({
//   uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
// });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = async () => {
    try {
      const response = await getWeather();
      
      this.setState({
        data: response.list,
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { data } = this.state;
    
    return (
      // <ApolloProvider client={client}>
        // <div className="app">
          <WeatherContext.Provider value={data.slice(0, 7)}>
            <WeeklyForecast />
          </WeatherContext.Provider>
        // </div>
      // </ApolloProvider>
    );
  }
}

export default App;
