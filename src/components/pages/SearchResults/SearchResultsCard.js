import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';

export const SearchResults = props => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={props.groomer.business_name}
        extra={
          <Link to={`/groomer-search-results/${props.groomer.user_id}`}>
            Go
          </Link>
        }
        style={{ width: 400 }}
      >
        <h3>
          {props.groomer.given_name} {props.groomer.family_name}
        </h3>
        <p>{props.groomer.phone_number}</p>
        <p>
          {props.groomer.address} {props.groomer.city}, {props.groomer.zip_code}
        </p>
      </Card>
    </div>
  );
};
