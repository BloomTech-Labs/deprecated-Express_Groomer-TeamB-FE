import axios from '../../axios';
import React, { Component } from 'react';
import { List, Typography, Divider } from 'antd';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }
  getUsersData() {
    axios
      .get(`/services`, {})
      .then(res => {
        const data = res.data;
        console.log(data);
        const services = data.map(gs => (
          <div>
            <h2>
              {gs.service_name}: {gs.services_price}
            </h2>
          </div>
        ));

        this.setState({
          services,
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
        <Divider orientation="left">Services</Divider>
        <List
          header={<div></div>}
          footer={<div></div>}
          bordered
          dataSource={this.state.services}
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
