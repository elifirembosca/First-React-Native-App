import React, {Component} from 'react';
import Info from './Info';
import {ScrollView} from 'react-native';

class LaunchList extends Component {
  state = {data: []};
  async componentDidMount() {
    try {
      const response = await fetch('https://launchlibrary.net/1.4/launch/2020-07-02/2020-04-02');
      const responseJson = await response.json();
      this.setState({
        data: responseJson.launches,
      });
    } catch (error) {
      console.error(error);
    }
  }

  renderData() {
    return this.state.data.map(
      (responseData, Id) => (
        (<Info navigation={this.props.navigation} key={Id} data={responseData} />)
      ),
    );
  }

  render() {
    return <ScrollView>{this.renderData()}</ScrollView>;
  }
}

export default LaunchList;
