import axios from '../../axios';
import React, { Component } from 'react';
import { List, Typography } from 'antd';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groomer_services: [],
    };
  }
  getUsersData() {
    axios
      .get(`/groomer_services`, {})
      .then(res => {
        const data = res.data;
        console.log(data);
        const groomer_services = data.map(gs => (
          <div>
            <p>
              {gs.service_name}: {gs.services_price}
            </p>
          </div>
        ));

        this.setState({
          groomer_services,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    return (
      <div>
        <List
          dataSource={this.state.groomer_services}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark></Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
